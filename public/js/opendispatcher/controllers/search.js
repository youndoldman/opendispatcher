/*!
 *  Copyright (c) 2014 Milo van der Linden (milo@dogodigi.net)
 *
 *  This file is part of opendispatcher/safetymapsDBK
 *
 *  opendispatcher is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  opendispatcher is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with opendispatcher. If not, see <http://www.gnu.org/licenses/>.
 *
 */

angular
  .module('opendispatcher.controllers')
  .value('searchprovider', 'sites')
  .value('map', 'openlayers')
  .controller('SearchController', SearchController);

/**
 * This module connects the search autocomplete dialog to the different available searchProviders and allows
 * users to search for Sites or other entities that result in a map zoomTo()
 */
function SearchController($scope, GoogleGeocoderFactory, NominatimGeocoderFactory, MapzenGeocoderFactory, BagGeocoderFactory, searchprovider, map, $filter) {
  $scope.selected = undefined;
  $scope.features = undefined;
  $scope.providers = [{
    text: 'search.dbk',
    placeholder: 'search.dbkplaceholder',
    factory: "sites",
    icon: 'fa-building'
  }, {
    text: 'search.oms',
    placeholder: 'search.omsplaceholder',
    factory: "alarms",
    icon: 'fa-bell'
  }, {
    text: 'search.address',
    placeholder: 'search.addressplaceholder',
    factory: "mapzen",
    icon: 'fa-home'
  }, {
    text: 'search.coordinates',
    placeholder: 'search.coordplaceholder',
    factory: 'coordinates',
    icon: 'fa-thumb-tack'
  }];
  $scope.selectedType = 'fa-building';
  $scope.searchPlaceholder = 'search.dbkplaceholder';

  $scope.onSelect = function($item, $model, $label) {
    console.log($item);
    //If item has an id; open that site, else zoom to the geometry
    //zoom to item.location
    switch (map) {
      case "openlayers":
        if ($item.id) {
          dbkjs.modules.feature.handleDbkOmsSearch($item.olFeature);
        }
        break;
      default:
        leafletData.getMap().then(function(map) {
          map.fitBounds(L.geoJson($item.geometry).getBounds());
        });
    }

  };
  $scope.changeProvider = function(provider) {
    searchprovider = provider.factory;
    $scope.selectedType = provider.icon;
    $scope.searchPlaceholder = provider.placeholder;
  };
  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
  $scope.getLocation = function(val) {
    switch (searchprovider) {
      case "google":
        return GoogleGeocoderFactory.search({
            address: val,
            sensor: false
          })
          .$promise.then(function(response) {
            return response.results.map(function(item) {
              item.label = item.formatted_address;
              return item;
            });
          });
      case "nominatim":
        return NominatimGeocoderFactory.search({
            format: 'json',
            q: val,
            email: 'info@opendispatcher.org'
          })
          .$promise.then(function(response) {
            return response.map(function(item) {
              return {
                label: item.display_name,
                geometry: {
                  type: 'Point',
                  coordinates: [
                    item.lon, item.lat
                  ]
                },
                type: 'Address'
              };
            });
          });
      case "mapzen":
        return MapzenGeocoderFactory.autocomplete({
            format: 'json',
            text: val
          })
          .$promise.then(function(response) {
            return response.map(function(item) {
              return {
                label: item.properties.label,
                geometry: item.geometry,
                type: 'Address'
              };
            });
          });
      case "bag":
        return BagGeocoderFactory.autocomplete({
            format: 'json',
            text: val,
            srid: dbkjs.options.projection.srid
          })
          .$promise.then(function(response) {
            return response.map(function(item) {
              return {
                label: item.display_name,
                geometry: {
                  type: 'Point',
                  coordinates: [item.lon, item.lat]
                },
                type: 'Address'
              };
            });
          });
      case "coordinates":
        var loc;
        var coords = val.split(/[\s,]+/);
        coords[0] = parseFloat(coords[0]);
        coords[1] = parseFloat(coords[1]);
        if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
          if (coords[0] > 50.0 && coords[0] < 54.0 && coords[1] > 2.0 && coords[1] < 8.0) { //wgs84
            loc = new OpenLayers.LonLat(coords[1], coords[0]).transform(new OpenLayers.Projection("EPSG:4326"), dbkjs.map.getProjectionObject());
            $('#search_input').removeClass('has-error');
            //transform loc to geoJson
            return {
              label: val,
              geometry: {
                type: 'Point',
                coordinates: [loc.lon, loc.lat]
              },
              type: 'Coordinate'
            };
          } else if (coords[0] > -14000.0 && coords[0] < 293100.0 && coords[1] > 293100.0 && coords[1] < 650000.0) { //rd
            loc = new OpenLayers.LonLat(coords[0], coords[1]).transform(new OpenLayers.Projection("EPSG:28992"), dbkjs.map.getProjectionObject());
            $('#search_input').removeClass('has-error');
            //transform loc to geoJson
            return {
              label: val,
              geometry: {
                type: 'Point',
                coordinates: [loc.lon, loc.lat]
              },
              type: 'Coordinate'
            };
          } else {
            // @todo build function to handle map fault
            //maak het vakje rood, geen geldige coordinaten
            $('#search_input').addClass('has-error');
          }
        } else {
          $('#search_input').addClass('has-error');
        }
        return null;


      case "alarms":
        if (!$scope.features) {
          $scope.features = dbkjs.modules.feature.features;
        }
        return $filter('filter')($scope.features, {
          attributes: {
            OMSNummer: val
          }
        }).map(function(item) {
          return {
            label: dbkjs.modules.feature.getOmsSearchValue(item),
            geometry: {
              type: 'Point',
              coordinates: [item.geometry.x, item.geometry.y]
            },
            id: item.id,
            olFeature: item,
            type: 'Site'
          };
        });
      default:
        if (!$scope.features) {
          $scope.features = dbkjs.modules.feature.features;
        }
        return $filter('filter')($scope.features, {
          attributes: {
            $: val
          }
        }).map(function(item) {
          return {
            label: dbkjs.modules.feature.getDbkSearchValue(item),
            geometry: {
              type: 'Point',
              coordinates: [item.geometry.x, item.geometry.y]
            },
            id: item.id,
            olFeature: item,
            type: 'Site'
          };
        });
    }
  };
}
