System.register([],(function(e){"use strict";return{execute:function(){var a=e("datepicker",{cancel:"Atcelt",update:"Atjaunināt",to:"līdz",date:"Datums",time:"Time"});var i=e("dropdown",{add:"Pievienot",cancel:"Atcelt"});var t=e("fileUploader",{text:"Augšupielādējiet failu",description:"vai ievelciet un nolieciet šeit",acceptError:"Augšupielādējiet tikai CSV failus.",maxFileSizeError:"Pārsniegts faila lielums.",maxFilesLimitError:"Pārsniegts faila ierobežojums.",fileUploadError:"Faila augšupielāde neizdevās",uploading:"Notiek augšupielāde",selectedFiles:"Izvēlētie faili",remove:"Noņemt"});var s=e("modal",{cancel:"Atcelt",ok:"Labi"});var l=e("search",{search:"Meklēt",noItemsFound:"Nekas nav atrasts",noDataAvailable:"Dati nav pieejami",startTyping:"Sāciet rakstīt..."});var o=e("form",{required:"{{field}} ir obligāts",invalidUrl:"Ievadiet derīgu URL",invalidEmail:"Ievadiet derīgu e-pastu",invalidNumber:"Ievadiet derīgu numuru"});var r=e("pagination",{buttonGroupLabel:"Lappuses vadība",previousButtonLabel:"Iepriekšējais",nextButtonLabel:"Nākamais",content:"<span class='record'>{{start}}</span> līdz <span class='record'>{{end}}</span> no {{total}}"});var u=e("datatable",{chooseColumns:"Izvēlieties slejas",actions:"Darbības",hide:"Slēpt",show:"Rādīt",showMore:"Rādīt vairāk",showLess:"Rādīt mazāk",customizeColumns:"Customize columns"});var n=e("platformTable",{delete:"Dzēst",sortby:"Šķirot pēc",orderby:"Pasūtīts"});var d=e("formBuilder",{fieldRequired:"Nepieciešams, iesniedzot veidlapu",fieldRequiredTag:"Obligāts",fieldUnique:"Apstiprināt unikālo vērtību katram ierakstam",fieldUniqueHoverText:"Šim laukam nevar būt divi ieraksti ar vienādu vērtību. Šo iestatījumu vēlāk nebūs iespējams mainīt.",fieldUniqueTag:"Unikāls",fieldFilter:"Izmantojiet šo lauku, lai filtrētu ierakstus",fieldFilterHoverText:"Filtrējiet savu ierakstu sarakstu, izmantojot šo lauku. Šo iestatījumu vēlāk nebūs iespējams mainīt.",fieldFilterTag:"Filtrējams",fieldTypeRelationship:"Uzmeklēšanas attiecības",fieldTypeRelationshipDesc:"Izveidojiet asociācijas starp diviem objektiem.",fieldTypeRelationshipDescLinkLabel:"Uzzināt vairāk",fieldTypeText:"Teksts",fieldTypeParagraph:"Rindkopa",fieldTypeNumber:"Skaitlis",fieldTypeDecimal:"Decimāls",fieldTypeDate:"Datums",fieldTypeDropdown:"Nolaižamā izvēlne",fieldTypeCheckbox:"Lodziņš",fieldTypeMultiselect:"Vairākas iespējas",lookupUniqueTag:"Unikāls",primaryFieldTag:"Galvenais lauks",primaryFieldHeader:"Galvenais lauks",primaryFieldNameHint:"Šis ir objekta galvenais lauks, kas unikāli attēlo katru ierakstu, un to nevar izdzēst.",deleteFieldTitle:"Vai tiešām vēlaties dzēst šo lauku, {{label}}?",deleteFieldMessage:"Šis lauks tiks neatgriezeniski dzēsts, un visi saistītie dati tiks zaudēti. Vai vēlaties turpināt?",deleteFieldSubmit:"Dzēst",searchFields:"Meklēt pēc lauka etiķetes",customizeWidget:"Pielāgot logrīku",addChoices:"Pievienot izvēles",addChoice:"Pievienot izvēli",choicePlaceholderSuffix:"Izvēle",headerFieldTypes:"Lauku veidi",headerFields:"Lauki",fieldTypesDragDrop:"Ievelciet no šejienes",behaviour:"Aģentu uzvedība",fieldLabel:"Etiķete aģentiem",fieldLabelPlaceholder:"Ievadiet lauka etiķeti",addFieldBtn:"Pievienot lauku",saveFieldBtn:"Saglabāt",cancelFieldBtn:"Atcelt",lookupAssociationHeader:"Asociācija",lookupSourceObject:"Avota objekts",lookupRelationshipPlaceholder:"Izvēlieties attiecības",lookupRelationshipLabel:"Attiecību veids",lookupTargetPlaceholder:"Izvēlieties mērķa objektu",lookupTargetLabel:"Mērķa objekts",relationshipManyToOne:"No daudziem uz vienu",relationshipManyToOneDesc:"Sasaista vairākus avota objekta ierakstus ar vienu mērķa objekta ierakstu, piemēram, kontakts var izveidot vairākus pasūtījumus.",relationshipOneToOne:"No viena uz vienu",relationshipOneToOneDesc:"Sasaista vienu avota objekta ierakstu ar vienu mērķa objekta ierakstu, piemēram, personai var būt tikai viena pase.",relationshipManyToOneCO:"Vairākus<span class='fb-field-lookup-relationship-object-name'>{{source}}</span> ierakstus var sasaistīt ar vienu <span class='fb-field-lookup-relationship-object-name'>{{target}} ierakstu</span>.",relationshipOneToOneCO:"Vienu <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> ierakstu var sasaistīt ar vienu<span class='fb-field-lookup-relationship-object-name'>{{target}} ierakstu</span>.",relationshipManyToOneNative:"Vairākus <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> ierakstus var sasaistīt ar vienu <span class='fb-field-lookup-relationship-object-name'>{{target}} ierakstu</span>.",relationshipOneToOneNative:"Vienu<span class='fb-field-lookup-relationship-object-name'>{{source}}</span> ierakstu var sasaistīt ar vienu <span class='fb-field-lookup-relationship-object-name'>{{target}} ierakstu</span>.",customizeWidgetModalHeader:"Pielāgot logrīku",customizeWidgetModalHint:"Izvēlieties ne vairāk kā 5 laukus attēlošanai logrīkā.",customizeWidgetModalSaveBtn:"Saglabāt",customizeWidgetModalCancelBtn:"Atcelt",noSearchItemsFound:"Nav atrasts neviens atbilstošs lauks",errors:{emptyFieldName:"Nepieciešama lauka etiķete.",emptyRelationshipType:"Attiecību veids ir obligāts.",emptyTargetObject:"Nepieciešams mērķa objekts.",emptyChoice:"Nepieciešams izvēles teksts.",duplicate:"Nolaižamā izvēlne jau pastāv",minimum:"Ievadiet vismaz vienu izvēli",formErrors:"Lūdzu, izlabojiet kļūdas un turpiniet",fieldNameExists:"Šajā veidlapā ir vēl viens lauks ar tādu pašu nosaukumu. Lūdzu, izmantojiet citu nosaukumu.",deleteDropDownChoice:"Izvēles dzēšana ietekmēs visus saistītos ierakstus"},maximumLimits:{filterable:"Ierakstu filtrēšanai saraksta skatā var izvēlēties ne vairāk kā {{count}} laukus (izņemot uzmeklēšanas laukus).",unique:"Kā unikālus var atzīmēt ne vairāk kā {{count}} laukus.",fields:"Sasniegts maksimālais {{count}} lauku ierobežojums. Lai izveidotu jaunu lauku, izdzēsiet esošu lauku.",lookups:"Sasniegts maksimālais {{count}} uzmeklēšanas lauku ierobežojums. Lai izveidotu jaunu lauku, izdzēsiet esošu meklēšanas lauku."}});var k=e("platformCouiWidgets",{viewAllWidgetRecords:"Skatīt visus ierakstus",noRecordsLinked:"Nav piesaistīts neviens ieraksts",linkWidgetButton:"Piesaistīt jaunu ierakstu",linkModalHeader:"Piesaistīt jaunu ierakstu",linkModalSelectSearchHeader:"Meklēt pēc {{fieldName}}",linkModalSelectSearchPlaceholder:"Meklē...",linkModalSelectEmptySearch:"Sāciet rakstīt...",linkModalSelectNoResultFound:"Nav atrasts neviens ieraksts",linkModalSubmitButton:"Saglabāt",linkModalCancelButton:"Atcelt",linkModalSuccess:"Ieraksts ir veiksmīgi atjaunināts",linkModalError:"Nevar atjaunināt ierakstu",checkBoxYesValue:"Jā",checkBoxNoValue:"Nē",widgetSectionHeader:"{{fieldLabel}} ir {{contextLabel}}",linkModalLoadingText:"Notiek informācijas iegūšana...",relatedWidgetAccordionHeader:"Saistīts {{schema}}"});var p=e("filters",{addFilter:"+ Pievienot jaunu nosacījumu",noFilter:"Jūs vēl neesat pievienojis nevienu filtru",validation:{required:"Nepieciešama vērtība",minMax:"Jābūt lielākam par {{fromValue}}"},placeholder:{startRange:"Sākuma diapazons",endRange:"Beigu diapazons",and:"un"}});var c=e("searchDropdown",{placeholder:{search:"Rakstiet, lai meklētu"}});var m=e("sortSelect",{ascending:"Ascending",descending:"Descending"});var v=e("default",{datepicker:a,dropdown:i,fileUploader:t,modal:s,search:l,form:o,pagination:r,datatable:u,platformTable:n,formBuilder:d,platformCouiWidgets:k,filters:p,export:{modalTitle:"Eksportēt ierakstus",exportFormat:"Eksportēt kā:",fields:"Lauki",selectAllFields:"Atzīmēt visus laukus",searchFieldsPrompt:"Meklēt laukus",selectedFields:"{{count}} atlasīts",submitButton:"Eksportēt",cancelButton:"Atcelt",noSearchResults:"Nav atrastu rezultātu",filterInfo:"Eksportēšana ietver {{filtered}}  no {{total}}  ierakstiem, pamatojoties uz filtra kritērijiem. <a class='clearExportFilter'>Notīriet filtrus</a> , lai eksportētu visus ierakstus"},searchDropdown:c,sortSelect:m})}}}));