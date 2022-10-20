System.register([],(function(e){"use strict";return{execute:function(){var i=e("datepicker",{cancel:"Tühista",update:"Uuenda",to:"- ",date:"Kuupäev",time:"Time"});var a=e("dropdown",{add:"Lisa",cancel:"Tühista"});var t=e("fileUploader",{text:"Laadi fail üles",description:"või lohista ja kukuta siia",acceptError:"Laadi üles ainult CSV-failid.",maxFileSizeError:"Faili suurus on ületatud.",maxFilesLimitError:"Faili limiit on ületatud.",fileUploadError:"Faili üleslaadimine nurjus",uploading:"Üleslaadimine",selectedFiles:"Valitud failid",remove:"Eemalda"});var l=e("modal",{cancel:"Tühista",ok:"OK"});var s=e("search",{search:"Otsi",noItemsFound:"Ühtegi üksust ei leitud",noDataAvailable:"Andmed puuduvad",startTyping:"Hakka trükkima..."});var o=e("form",{required:"{{field}} on kohustuslik",invalidUrl:"Sisesta kehtiv URL",invalidEmail:"Sisesta kehtiv e-posti aadress",invalidNumber:"Sisesta kehtiv number"});var d=e("pagination",{buttonGroupLabel:"Lehekülgedeks jaotamise juhtimine",previousButtonLabel:"Eelmine",nextButtonLabel:"Järgmine",content:"<span class='record'>{{start}}</span> kuni <span class='record'>{{end}}</span>/{{total}}"});var n=e("datatable",{chooseColumns:"Vali veerud",actions:"Toimingud",hide:"Peida",show:"Näita",showMore:"Näita rohkem",showLess:"Näita vähem",customizeColumns:"Customize columns"});var r=e("platformTable",{delete:"Kustuta",sortby:"Sortimisalus",orderby:"Järjestamise alus"});var u=e("formBuilder",{fieldRequired:"Nõutav vormi esitamisel",fieldRequiredTag:"Kohustuslik",fieldUnique:"Luba iga kirje jaoks kordumatu väärtus",fieldUniqueHoverText:"Sellel väljal ei saa kahel kirjel olla sama väärtus. Sa ei saa seda seadet hiljem muuta.",fieldUniqueTag:"Kordumatu",fieldFilter:"Kasuta seda välja kirjete filtreerimiseks",fieldFilterHoverText:"Filtreeri selle välja abil oma kirjete loendit. Sa ei saa seda seadet hiljem muuta.",fieldFilterTag:"Filtreeritav",fieldTypeRelationship:"Otsingu seos",fieldTypeRelationshipDesc:"Loo kahe objekti vahel seoseid.",fieldTypeRelationshipDescLinkLabel:"Loe lähemalt",fieldTypeText:"Tekst",fieldTypeParagraph:"Lõik",fieldTypeNumber:"Number",fieldTypeDecimal:"Komakoht",fieldTypeDate:"Kuupäev",fieldTypeDropdown:"Rippmenüü",fieldTypeCheckbox:"Märkeruut",fieldTypeMultiselect:"Mitmikvalik",lookupUniqueTag:"Kordumatu",primaryFieldTag:"Esmane väli",primaryFieldHeader:"Esmane väli",primaryFieldNameHint:"See on objekti esmane väli, mis esindab unikaalselt iga välja ning mida ei saa kustutada.",deleteFieldTitle:"Kas oled kindel, et soovid kustutada välja {{label}}?",deleteFieldMessage:"See väli kustutatakse jäädavalt ja kõik seotud andmed lähevad kaotsi. Kas soovid kindlasti jätkata?",deleteFieldSubmit:"Kustuta",searchFields:"Otsi välja sildi järgi",customizeWidget:"Kohanda vidinat",addChoices:"Lisa valikud",addChoice:"Lisa valik",choicePlaceholderSuffix:"Valik",headerFieldTypes:"Välja tüübid",headerFields:"Väljad",fieldTypesDragDrop:"Lohista ja kukuta siit",behaviour:"Agentide käitumine",fieldLabel:"Agentide silt",fieldLabelPlaceholder:"Sisesta välja silt",addFieldBtn:"Lisa väli",saveFieldBtn:"Salvesta",cancelFieldBtn:"Tühista",lookupAssociationHeader:"Ühing",lookupSourceObject:"Lähteobjekt",lookupRelationshipPlaceholder:"Vali seos",lookupRelationshipLabel:"Seose tüüp",lookupTargetPlaceholder:"Vali sihtobjekt",lookupTargetLabel:"Sihtobjekt",relationshipManyToOne:"Paljud ühele",relationshipManyToOneDesc:"Seosta paljud lähteobjekti kirjed sihtobjekti ühe kirjega. Nt Kontakt võib esitada mitu tellimust.",relationshipOneToOne:"Üks ühele",relationshipOneToOneDesc:"Seosta üks lähteobjekti kirje ainult ühe sihtobjekti ühe kirjega. Nt isikul saab olla ainult üks pass.",relationshipManyToOneCO:"Ühe <span class='fb-field-lookup-relationship-object-name'>{{target}}</span> kirjega võib siduda mitu kirjet <span class='fb-field-lookup-relationship-object-name'>{{source}}</span>.",relationshipOneToOneCO:"Kirjega <span class='fb-field-lookup-relationship-object-name'>{{target}}</span> võib siduda ühe kirje <span class='fb-field-lookup-relationship-object-name'>{{source}}</span>.",relationshipManyToOneNative:"Mitmed kirjed <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> võivad olla seotud ühe üksusega <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipOneToOneNative:"Üks kirje <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> võib olla seotud ühe üksusega <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",customizeWidgetModalHeader:"Kohanda vidinat",customizeWidgetModalHint:"Vali vidinas kuvamiseks kuni 5 välja.",customizeWidgetModalSaveBtn:"Salvesta",customizeWidgetModalCancelBtn:"Tühista",noSearchItemsFound:"Ühtegi sobituvat välja ei leitud",errors:{emptyFieldName:"Välja silt on nõutud.",emptyRelationshipType:"Suhte liik on nõutud.",emptyTargetObject:"Sihtobjekt on nõutud.",emptyChoice:"Valiku tekst on nõutud.",duplicate:"Rippmenüü valik on juba olemas",minimum:"Sisesta vähemalt üks valik",formErrors:"Paranda vead ja jätka",fieldNameExists:"Sellel vormil on teine samanimeline väli. Kasuta teist nime.",deleteDropDownChoice:"Valiku kustutamine mõjutab kõiki seotud kirjeid"},maximumLimits:{filterable:"Loendivaates võib kirjete filtreerimiseks valida maksimaalselt {{count}} välja (välja arvatud otsinguväljad).",unique:"Maksimaalselt {{count}} välja saab märkida unikaalseks.",fields:"{{count}} välja maksimaalne limiit on saavutatud. Uue välja loomiseks kustuta olemasolev väli.",lookups:"{{count}} otsinguvälja maksimaalne limiit on saavutatud. Uue otsinguvälja loomiseks kustuta olemasolev väli."}});var k=e("platformCouiWidgets",{viewAllWidgetRecords:"Vaata kõiki kirjeid",noRecordsLinked:"Kirjeid pole lingitud",linkWidgetButton:"Seo uus kirje",linkModalHeader:"Seo uus kirje",linkModalSelectSearchHeader:"Otsi välja {{fieldName}} järgi",linkModalSelectSearchPlaceholder:"Otsi...",linkModalSelectEmptySearch:"Hakka trükkima...",linkModalSelectNoResultFound:"Kirjeid ei leitud",linkModalSubmitButton:"Salvesta",linkModalCancelButton:"Tühista",linkModalSuccess:"Kirje on edukalt uuendatud",linkModalError:"Kirjet ei saa uuendada",checkBoxYesValue:"Jah",checkBoxNoValue:"Ei",widgetSectionHeader:"{{fieldLabel}} on {{contextLabel}}",linkModalLoadingText:"Andmete hankimine...",relatedWidgetAccordionHeader:"Seotud {{schema}}"});var m=e("filters",{addFilter:"+ Lisa teine tingimus",noFilter:"Sa ei ole ühtegi filtrit lisanud",validation:{required:"Väärtus on nõutud",minMax:"Peab olema suurem kui {{fromValue}}"},placeholder:{startRange:"Alustusvahemik",endRange:"Lõpuvahemik",and:"ja"}});var p=e("searchDropdown",{placeholder:{search:"Otsimiseks alusta trükkimist"}});var c=e("sortSelect",{ascending:"Ascending",descending:"Descending"});var h=e("default",{datepicker:i,dropdown:a,fileUploader:t,modal:l,search:s,form:o,pagination:d,datatable:n,platformTable:r,formBuilder:u,platformCouiWidgets:k,filters:m,export:{modalTitle:"Ekspordi kirjed",exportFormat:"Ekspordi kui",fields:"Väljad",selectAllFields:"Vali kõik väljad",searchFieldsPrompt:"Otsinguväljad",selectedFields:"{{count}} valitud",submitButton:"Ekspordi",cancelButton:"Tühista",noSearchResults:"Tulemusi ei leitud",filterInfo:"Eksport sisaldab filtrikriteeriumide alusel {{filtered}} kirjet {{total}}-st. <a class='clearExportFilter'>Kõigi kirjete eksportimiseks tühjendage filtrid</a>"},searchDropdown:p,sortSelect:c})}}}));