System.register([],(function(e){"use strict";return{execute:function(){var t=e("datepicker",{cancel:"Avbryt",update:"Oppdater",to:"til",date:"Dato",time:"Time"});var l=e("dropdown",{add:"Legg til",cancel:"Avbryt"});var i=e("fileUploader",{text:"Last opp fil",description:"eller dra og slipp her",acceptError:"Last opp kun CSV-filer.",maxFileSizeError:"Filstørrelsen er overskredet.",maxFilesLimitError:"Filgrensen er overskredet.",fileUploadError:"Filopplastingen mislyktes",uploading:"Laster opp",selectedFiles:"Valgte filer",remove:"Fjern"});var r=e("modal",{cancel:"Avbryt",ok:"OK"});var n=e("search",{search:"Søk",noItemsFound:"Fant ingen elementer",noDataAvailable:"Ingen data tilgjengelig",startTyping:"Begynn å skrive …"});var a=e("form",{required:"{{field}} er obligatorisk",invalidUrl:"Angi en gyldig URL",invalidEmail:"Angi en gyldig e-post",invalidNumber:"Angi et gyldig nummer"});var o=e("pagination",{buttonGroupLabel:"Pagineringskontroller",previousButtonLabel:"Forrige",nextButtonLabel:"Neste",content:"<span class='record'>{{start}}</span> til <span class='record'>{{end}}</span> av {{total}}"});var s=e("datatable",{chooseColumns:"Velg kolonner",actions:"Handlinger",hide:"Skjul",show:"Vis",showMore:"Vis mer",showLess:"Vis mindre",customizeColumns:"Customize columns"});var d=e("platformTable",{delete:"Slett",sortby:"Sorter etter",orderby:"Sorter etter"});var p=e("formBuilder",{fieldRequired:"Obligatorisk ved innsending av skjemaet",fieldRequiredTag:"Obligatorisk",fieldUnique:"Godta unik verdi for hver post",fieldUniqueHoverText:"Ingen to poster kan ha samme verdi for dette feltet. Du vil ikke kunne endre denne innstillingen senere.",fieldUniqueTag:"Unik",fieldFilter:"Bruk dette feltet til å filtrere poster",fieldFilterHoverText:"Filtrer listen din over poster ved å bruke dette feltet. Du vil ikke kunne endre denne innstillingen senere.",fieldFilterTag:"Filtrerbar",fieldTypeRelationship:"Oppslagsrelasjon",fieldTypeRelationshipDesc:"Lag tilknytninger mellom to objekter.",fieldTypeRelationshipDescLinkLabel:"Finn ut mer",fieldTypeText:"Tekst",fieldTypeParagraph:"Avsnitt",fieldTypeNumber:"Nummer",fieldTypeDecimal:"Desimal",fieldTypeDate:"Dato",fieldTypeDropdown:"Rullegardinliste",fieldTypeCheckbox:"Avmerkingsboks",fieldTypeMultiselect:"Flervalg",lookupUniqueTag:"Unik",primaryFieldTag:"Hovedfelt",primaryFieldHeader:"Hovedfelt",primaryFieldNameHint:"Dette er objektets hovedfelt som unikt representerer hver post og kan ikke slettes.",deleteFieldTitle:"Er du sikker på at du vil slette feltet {{label}}?",deleteFieldMessage:"Dette feltet vil bli slettet permanent og alle tilknyttede data vil gå tapt. Vil du fortsatt gå videre?",deleteFieldSubmit:"Slett",searchFields:"Søk etter feltetikett",customizeWidget:"Tilpass widget",addChoices:"Legg til valg",addChoice:"Legg til valg",choicePlaceholderSuffix:"Valg",headerFieldTypes:"Felttyper",headerFields:"Felter",fieldTypesDragDrop:"Dra og slipp herfra",behaviour:"Atferd for agenter",fieldLabel:"Etikett for agenter",fieldLabelPlaceholder:"Angi feltetiketten",addFieldBtn:"Legg til felt",saveFieldBtn:"Lagre",cancelFieldBtn:"Avbryt",lookupAssociationHeader:"Tilknytning",lookupSourceObject:"Kildeobjekt",lookupRelationshipPlaceholder:"Velg relasjon",lookupRelationshipLabel:"Relasjonstype",lookupTargetPlaceholder:"Velg målobjekt",lookupTargetLabel:"Målobjekt",relationshipManyToOne:"Mange til en",relationshipManyToOneDesc:"Koble mange poster i kildeobjektet til en post i målobjektet. For eksempel kan mange saker opprettes av en kontakt.",relationshipOneToOne:"En-til-en",relationshipOneToOneDesc:"Koble en post i kildeobjektet til bare en post i målobjektet. For eksempel kan en person bare ha ett pass.",relationshipManyToOneCO:"Mange poster i <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> kan knyttes til en post i <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipOneToOneCO:"En post i <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> kan knyttes til en post i <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipManyToOneNative:"Mange poster i <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> kan knyttes til en <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipOneToOneNative:"En post i <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> kan knyttes til en <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",customizeWidgetModalHeader:"Tilpass widget",customizeWidgetModalHint:"Velg opptil 5 felter som skal vises på widgeten.",customizeWidgetModalSaveBtn:"Lagre",customizeWidgetModalCancelBtn:"Avbryt",noSearchItemsFound:"Fant ingen samsvarende felter",errors:{emptyFieldName:"Feltetikett er påkrevd.",emptyRelationshipType:"Relasjonstype er påkrevd.",emptyTargetObject:"Målobjekt er påkrevd.",emptyChoice:"Valgtekst er påkrevd.",duplicate:"Rullegardinvalget finnes allerede",minimum:"Angi minst ett valg",formErrors:"Rett opp feilene og for å gå videre",fieldNameExists:"Det finnes et annet felt med det samme navnet i dette skjemaet. Bruk et annet navn.",deleteDropDownChoice:"Sletting av et valg vil påvirke alle relaterte poster"},maximumLimits:{filterable:"Opptil {{count}} felter (unntatt oppslag) kan velges for å filtrere poster i listevisningen.",unique:"Opptil {{count}} felter kan markeres som unike.",fields:"Grensen på {{count}} felter er nådd. Slett et eksisterende felt for å kunne opprette et nytt.",lookups:"Grensen på {{count}} oppslagsfelter er nådd. Slett et oppslagsfelt for å kunne opprette et nytt."}});var k=e("platformCouiWidgets",{viewAllWidgetRecords:"Se alle poster",noRecordsLinked:"Ingen poster koblet",linkWidgetButton:"Koble til en ny post",linkModalHeader:"Koble til en ny post",linkModalSelectSearchHeader:"Søk etter {{fieldName}}",linkModalSelectSearchPlaceholder:"Søk …",linkModalSelectEmptySearch:"Begynn å skrive …",linkModalSelectNoResultFound:"Ingen poster funnet",linkModalSubmitButton:"Lagre",linkModalCancelButton:"Avbryt",linkModalSuccess:"Posten er oppdatert",linkModalError:"Kan ikke oppdatere posten",checkBoxYesValue:"Ja",checkBoxNoValue:"Nei",widgetSectionHeader:"{{fieldLabel}} er {{contextLabel}}",linkModalLoadingText:"Henter detaljer …",relatedWidgetAccordionHeader:"Relatert {{schema}}"});var g=e("filters",{addFilter:"+ Legg til ny betingelse",noFilter:"Du har ikke lagt til noen filtre enda",validation:{required:"Verdi er påkrevd",minMax:"Må være større enn {{fromValue}}"},placeholder:{startRange:"Startintervall",endRange:"Sluttintervall",and:"og"}});var c=e("searchDropdown",{placeholder:{search:"Skriv for å søke"}});var u=e("sortSelect",{ascending:"Ascending",descending:"Descending"});var f=e("default",{datepicker:t,dropdown:l,fileUploader:i,modal:r,search:n,form:a,pagination:o,datatable:s,platformTable:d,formBuilder:p,platformCouiWidgets:k,filters:g,export:{modalTitle:"Eksporter poster",exportFormat:"Eksporter som:",fields:"Felter",selectAllFields:"Velg alle felt",searchFieldsPrompt:"Søk felt",selectedFields:"{{count}} valgt",submitButton:"Eksporter",cancelButton:"Avbryt",noSearchResults:"Ingen resultater funnet",filterInfo:"Eksporten inkluderer {{filtered}} av {{total}} poster basert på filterkriteriene. <a class='clearExportFilter'>Tøm filtrene</a> for å eksportere alle postene"},searchDropdown:c,sortSelect:u})}}}));