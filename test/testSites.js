/*!
 *
 */
(function () {
  'use strict';
  var expect = require('expect');
  var models = require('../models');
  describe('models/hazard', function () {
    before(function (done) {
      done();
    });
    describe('models/Hazard', function () {
      it('returns the hazard model', function () {
        expect(models.Hazard).toExist();
      });
    });
    describe('models/Site', function () {
      it('returns the site model', function () {
        expect(models.Site).toExist();
      });
    });
    describe('create', function () {
      it('creates a Organization with a Region', function () {
        return models.Organization.create({
           name: 'Regio Brabant Noord',
           abbreviation: 'brabantnoord',
           title: 'DOIV',
           logo: 'images/test.png',
           workspace: 'dbk' })
           .bind(this).then(function (organization) {
             var region = {
               "type": "Polygon",
               "crs":{
                 "type":"name",
                 "properties":{"name":"EPSG:4326"}
               },
               "coordinates": [[
                 [ 5.145009422787624, 51.640523524912169 ], [ 5.128329322417591, 51.637597728364838 ], [ 5.115991797666571, 51.637599855890294 ], [ 5.111486036653234, 51.635396960290748 ],
                 [ 5.106194178319324, 51.636109083200765 ], [ 5.101848226802364, 51.660785136262 ], [ 5.102953522122494, 51.66814608629474 ], [ 5.101582698872703, 51.672454450792074 ],
                 [ 5.104196054029434, 51.674895006474046 ], [ 5.101362681758063, 51.676749881455429 ], [ 5.1067715098131, 51.677299457852683 ], [ 5.10314766008, 51.702479145479565 ],
                 [ 5.111390625636997, 51.703632511988687 ], [ 5.10831078925676, 51.709434899689207 ], [ 5.101795253056209, 51.71302164626497 ], [ 5.099069741960876, 51.716648306140108 ],
                 [ 5.081756582531548, 51.722289429283464 ], [ 5.095438715175614, 51.728882521750222 ], [ 5.115253774277544, 51.735234464114747 ], [ 5.165557145060196, 51.742877449287981 ],
                 [ 5.178245395023777, 51.742860572564616 ], [ 5.196594436065888, 51.740224777990321 ], [ 5.221722480706882, 51.743432753346198 ], [ 5.230730406594593, 51.741392092777737 ],
                 [ 5.248746586089723, 51.733670335013947 ], [ 5.272569768038416, 51.740060697381999 ], [ 5.283292995848242, 51.739799060480578 ], [ 5.29393504333815, 51.736936467991995 ],
                 [ 5.300759542723644, 51.737462740386583 ], [ 5.320714774927998, 51.746010824955718 ], [ 5.349557425979699, 51.75412976289396 ], [ 5.3574516524394, 51.757821772126803 ],
                 [ 5.360629132302582, 51.761912546236296 ], [ 5.361452118608604, 51.776197852795519 ], [ 5.366664076171861, 51.786797327374892 ], [ 5.383608550742261, 51.80464184402841 ],
                 [ 5.39572638940017, 51.813959990270973 ], [ 5.40072025350067, 51.820003629767626 ], [ 5.405444667644096, 51.822308779889767 ], [ 5.414508115252169, 51.821459293251088 ],
                 [ 5.423200911888719, 51.814107822286552 ], [ 5.429496158613281, 51.811295722945381 ], [ 5.448368482539825, 51.809615537541902 ], [ 5.471012520142773, 51.812906710423718 ],
                 [ 5.476756689652499, 51.816885432170466 ], [ 5.481258969016534, 51.826458447445738 ], [ 5.490134908394118, 51.83049209670682 ], [ 5.504195860662429, 51.82835455927377 ],
                 [ 5.516971263977524, 51.819456668165714 ], [ 5.538602277577889, 51.816221027850069 ], [ 5.546973389698532, 51.81837780166461 ], [ 5.552195061685842, 51.825004834442908 ],
                 [ 5.55739114798735, 51.827396179157724 ], [ 5.589349079918779, 51.829693090342474 ], [ 5.601385098510607, 51.82702914046564 ], [ 5.618844528733146, 51.819758611161191 ],
                 [ 5.634581633541128, 51.819566642606055 ], [ 5.641840621817169, 51.817622810943632 ], [ 5.645620500824576, 51.81462364918508 ], [ 5.653804473069274, 51.801226627222484 ],
                 [ 5.66178349922007, 51.795318821846671 ], [ 5.668945859255166, 51.792821860366594 ], [ 5.689902165901529, 51.789784893955883 ], [ 5.706339426583954, 51.776121527816954 ],
                 [ 5.723050316454556, 51.774645946826993 ], [ 5.73106563857854, 51.772332045970487 ], [ 5.745142082361101, 51.75919422319393 ], [ 5.754086284245061, 51.755226784608432 ],
                 [ 5.765238178283989, 51.752757413898827 ], [ 5.779466912463413, 51.752168521975854 ], [ 5.815719111666562, 51.75710209739605 ], [ 5.848531486969279, 51.759304427265732 ],
                 [ 5.861836135695994, 51.758204410497164 ], [ 5.870924340925395, 51.755256357820286 ], [ 5.878360420863284, 51.75031485519915 ], [ 5.883751871894209, 51.737682548153074 ],
                 [ 5.885494952897759, 51.727790777601626 ], [ 5.891735262114906, 51.722893081080166 ], [ 5.907418555959402, 51.718506844782056 ], [ 5.938836856318065, 51.715566767365523 ],
                 [ 5.952962510126073, 51.711170780161467 ], [ 5.955955693761497, 51.708142831606267 ], [ 5.956369807651643, 51.699701862105719 ], [ 5.963982720887102, 51.679609438764828 ],
                 [ 5.963262836340016, 51.659446540651629 ], [ 5.965231474972372, 51.652030689701611 ], [ 5.972626714356679, 51.64569900121397 ], [ 5.997904140940052, 51.635936366366991 ],
                 [ 6.02201351638324, 51.61992118163915 ], [ 6.023939704466954, 51.616052271022276 ], [ 6.024657305148399, 51.598948571979612 ], [ 6.027769419335238, 51.593817489434642 ],
                 [ 6.038977976284329, 51.583995916002181 ], [ 6.038015972834458, 51.568923910580864 ], [ 6.04120857943611, 51.563541712295361 ], [ 6.04776838997508, 51.558507009655472 ],
                 [ 6.042871157374315, 51.558547515844523 ], [ 6.044412524593217, 51.557469463275581 ], [ 6.04108923433268, 51.556633606991866 ], [ 6.037258951025341, 51.558177467208701 ],
                 [ 6.034385276284818, 51.557533301980072 ], [ 6.032662592572872, 51.556857994013313 ], [ 6.033985259247782, 51.555582409341419 ], [ 6.031728957228543, 51.552434456198164 ],
                 [ 6.017847131887115, 51.56355693066957 ], [ 6.004256601309814, 51.570227282861786 ], [ 5.9763539628329, 51.561594289680393 ], [ 5.935262308628305, 51.553611386550827 ],
                 [ 5.906237669733141, 51.552086922934556 ], [ 5.890651839451222, 51.560335174919331 ], [ 5.820409972040505, 51.568618096545826 ], [ 5.800519931705631, 51.578619559672006 ],
                 [ 5.78664693431138, 51.598188669302466 ], [ 5.708856992589739, 51.585648182771799 ], [ 5.705722598125956, 51.587004783082548 ], [ 5.699441071188811, 51.584118405745528 ],
                 [ 5.651357428482754, 51.582358938404774 ], [ 5.652673077710877, 51.578317254959167 ], [ 5.656555714612344, 51.574651119817922 ], [ 5.653621597728972, 51.570369147093444 ],
                 [ 5.621768762687299, 51.553347537765383 ], [ 5.618199396132613, 51.555808830737291 ], [ 5.614225114825354, 51.55460456340964 ], [ 5.608276507652943, 51.55957910427766 ],
                 [ 5.584468902801043, 51.56270428203392 ], [ 5.553754606083109, 51.558344337048752 ], [ 5.533077497597658, 51.557795890062309 ], [ 5.545143412756551, 51.54181050053743 ],
                 [ 5.542860540995083, 51.540063313217885 ], [ 5.547481372056452, 51.537740521015031 ], [ 5.525020475160318, 51.521873655188102 ], [ 5.512917612137114, 51.524272964921096 ],
                 [ 5.501072271196409, 51.521323936832708 ], [ 5.499881416557975, 51.521450653345227 ], [ 5.499836349269442, 51.525244742212735 ], [ 5.503736394429135, 51.526467016452315 ],
                 [ 5.498240833729383, 51.528517571285292 ], [ 5.493463920336103, 51.5266908688508 ], [ 5.488681287149657, 51.53381355809789 ], [ 5.48729004728111, 51.541776430770582 ],
                 [ 5.468291042564387, 51.540660026523987 ], [ 5.431499826916895, 51.533342018971048 ], [ 5.42981828317336, 51.534967901352488 ], [ 5.423127412417964, 51.533840964740094 ],
                 [ 5.421255225847491, 51.537819552711305 ], [ 5.410896893502005, 51.542304636297864 ], [ 5.405380389901929, 51.548320978530917 ], [ 5.382749167720145, 51.543477479331052 ],
                 [ 5.368431264697687, 51.54353028915007 ], [ 5.364616964803698, 51.54503689708914 ], [ 5.346360355231473, 51.54427158749133 ], [ 5.337525591048592, 51.546328255082251 ],
                 [ 5.333032754599182, 51.551171124977799 ], [ 5.325101957589932, 51.551391625006652 ], [ 5.308382473941628, 51.545982783355328 ], [ 5.269405072673555, 51.553641771072144 ],
                 [ 5.261325906127142, 51.561045030048945 ], [ 5.246080247091183, 51.579465509013133 ], [ 5.247213990994978, 51.587039198245861 ], [ 5.213947387236981, 51.585540215894582 ],
                 [ 5.209022539222794, 51.591029347904374 ], [ 5.204573936118982, 51.589051179225358 ], [ 5.195237269272749, 51.595091179677404 ], [ 5.192639941783627, 51.59368129910672 ],
                 [ 5.191168439094444, 51.598422293214931 ], [ 5.18694743082317, 51.601707499909296 ], [ 5.179573132285214, 51.59764304171761 ], [ 5.169458643773025, 51.603591964317225 ],
                 [ 5.174884877512877, 51.610493091799377 ], [ 5.164864446988526, 51.612235969682054 ], [ 5.169271223116229, 51.618667724110914 ], [ 5.165697705054559, 51.622087351884893 ],
                 [ 5.163419822124648, 51.622204646587576 ], [ 5.163842018492819, 51.62407563916522 ], [ 5.149228269825306, 51.63866199039591 ], [ 5.145009422787624, 51.640523524912169 ]
               ]]
             };
             return models.Region.create({ OrganizationId: organization.id, geometry: region }).then(function (region) {
               expect(region.id).toEqual(1);
             });
           });
      });
      it('creates a Site', function () {
        var mySite = {
          name: 'Boseind 10 BT',
          title: 'Vion Boxtel B.V.',
          assistance: true,
          OrganizationId: 1,
          checked: new Date()
        };
        return models.Site.create(mySite).then(function (site) {
          expect(site.id).toEqual(1);
        });
      });
      it('creates a Building with an Address', function () {
        var building = {
          "type":"MultiPolygon",
          "crs":{
            "type":"name",
            "properties":{"name":"EPSG:4326"}
          },
          "coordinates":[[[
            [5.32393061048113,51.5787440865183],
            [5.32398425241903,51.5785544562699],
            [5.32467229727671,51.5786285317553],
            [5.32461865812593,51.5788181623187],
            [5.32393061048113,51.5787440865183]
          ]]]
        };
        return models.Building.create({SiteId: 1, geometry: building}).bind(this).then(function (building) {
          var point = {
            "type": "Point",
            "crs":{
              "type":"name",
              "properties":{"name":"EPSG:4326"}
            },
            "coordinates": [5.32321277901044,51.5793333481387]
          };
          return models.Address.create({
            street: 'Boseind',
            housenumber: '10, BT',
            postcode: '1066XX',
            BuildingId: building.id,
            SiteId: 1,
            geometry: point
          }).then(function (address) {
            expect(address.street).toEqual('Boseind');
          });
        });
      });
      it('Bulkcreates Hazard Types', function () {
        return models.HazardType.bulkCreate(
          [
            { id: 2001, name_en: 'Explosive', name_nl: 'Explosief', namespace: 'eughs', symbol: 'EU-GHS01'},
            { id: 2002, name_en: 'Flammable', name_nl: 'Ontvlambaar', namespace: 'eughs', symbol: 'EU-GHS02'},
            { id: 2006, name_en: 'Toxic', name_nl: 'Toxisch (giftig)', namespace: 'eughs', symbol: 'EU-GHS06'},
            { id: 2007, name_en: 'Dangerous', name_nl: 'Schadelijk', namespace: 'eughs', symbol: 'EU-GHS07'},
            { id: 3003, name_en: 'Laser', name_nl: 'Laserstralen', namespace: 'nen1414', symbol: 'Tw10'},
            { id: 3005, name_en: 'Magnetic field', name_nl: 'Magnetisch veld', namespace: 'nen1414', symbol: 'Tw12'},
          ],
          {returning: true})
          .bind(this).then(function (hazardtypes) {
           expect(hazardtypes.length).toEqual(6);
          });
      });
      it('Bulkcreates UnitTypes', function () {
        return models.UnitType.bulkCreate(
          [{id: 1, abbreviation: 'l', name_en: 'liter', name_nl: 'liter', namespace: 'SI', description: 'volume'},
          { id: 2, abbreviation: 'kg', name_en: 'kilogram', name_nl: 'kilogram', namespace: 'SI', description: 'mass'},
          { id: 3, abbreviation: 'm2', name_en: 'm2', name_nl: 'm2', namespace: 'SI', description: 'volume'}],
          {returning: true})
          .bind(this).then(function (unitTypes) {
           expect(unitTypes.length).toEqual(3);
          });
      });
      it('creates a Floor with a Hazard', function () {
        return models.Floor.create({ BuildingId: 1, name: 'BG'}).bind(this).then(function (floor) {
          var point = {
            "type": 'Point',
            "crs":{
              "type":"name",
              "properties":{"name":"EPSG:4326"}
            },
            "coordinates": [5.32321277901044,51.5793333481387] };
          return models.Hazard.bulkCreate(
            [
              { name: 'Stikstof', hin: '20', un: '1066', quantity: 41000, description: '', FloorId: floor.id, UnitId: 1, HazardTypeId: 2007, geometry: point},
              { name: 'Ammoniak koelsysteem', hin: '268', un: '1005', quantity: 768, description: '', FloorId: floor.id, UnitId: 2, HazardTypeId: 2006, geometry: point}
            ],
            {returning: true}
          ).then(function (hazards) {
            expect(hazards.length).toEqual(2);
          });
        });
      });

    });
  });
}());
