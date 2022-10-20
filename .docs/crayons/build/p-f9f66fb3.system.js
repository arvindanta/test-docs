System.register([],(function(e){"use strict";return{execute:function(){var a=e("datepicker",{cancel:"Cancel·lar",update:"Actualitzar",to:"a",date:"Data",time:"Time"});var i=e("dropdown",{add:"Afegir",cancel:"Cancel·lar"});var r=e("fileUploader",{text:"Carrega l'arxiu",description:"o arrossega'l i deixa'l anar aquí",acceptError:"Carrega arxius CSV únicament.",maxFileSizeError:"Mida de l'arxiu superada.",maxFilesLimitError:"Límit d'arxius superat.",fileUploadError:"S'ha produït un error en carregar l'arxiu",uploading:"Carregant",selectedFiles:"Arxius seleccionats",remove:"Eliminar"});var l=e("modal",{cancel:"Cancel·lar",ok:"D'acord"});var t=e("search",{search:"Cercar",noItemsFound:"No s'han trobat elements",noDataAvailable:"No hi ha dades disponibles",startTyping:"Comença a escriure..."});var o=e("form",{required:"{{field}} és obligatori",invalidUrl:"Introdueix un URL vàlid",invalidEmail:"Introdueix una adreça electrònica vàlida",invalidNumber:"Introdueix un número vàlid"});var s=e("pagination",{buttonGroupLabel:"Controls de paginació",previousButtonLabel:"Anterior",nextButtonLabel:"Següent",content:"<span class='record'>{{start}}</span> a <span class='record'>{{end}}</span> de {{total}}"});var n=e("datatable",{chooseColumns:"Triar columnes",actions:"Accions",hide:"Amagar",show:"Mostrar",showMore:"Mostrar-ne més",showLess:"Mostrar-ne menys",customizeColumns:"Customize columns"});var c=e("platformTable",{delete:"Eliminar",sortby:"Classificar per",orderby:"Ordenar per"});var d=e("formBuilder",{fieldRequired:"Obligatori quan s'envia el formulari",fieldRequiredTag:"Obligatori",fieldUnique:"Acceptar un valor únic per cada registre",fieldUniqueHoverText:"Dos registres no poden tenir el mateix valor en aquest camp. No podràs canviar aquesta configuració més endavant.",fieldUniqueTag:"Únic",fieldFilter:"Utilitza aquest camp per filtrar registres",fieldFilterHoverText:"Filtra la teva llista de registres mitjançant aquest camp. No podràs canviar aquesta configuració més endavant.",fieldFilterTag:"Filtrable",fieldTypeRelationship:"Cercar relació",fieldTypeRelationshipDesc:"Crea associacions entre dos objectes.",fieldTypeRelationshipDescLinkLabel:"Més informació",fieldTypeText:"Text",fieldTypeParagraph:"Paràgraf",fieldTypeNumber:"Número",fieldTypeDecimal:"Decimal",fieldTypeDate:"Data",fieldTypeDropdown:"Menú desplegable",fieldTypeCheckbox:"Casella de selecció",fieldTypeMultiselect:"Selecció múltiple",lookupUniqueTag:"Únic",primaryFieldTag:"Camp principal",primaryFieldHeader:"Camp principal",primaryFieldNameHint:"Aquest és el camp principal de l'objecte que representa de manera única cada registre i que no es pot eliminar.",deleteFieldTitle:"Confirmes que vols eliminar el camp, {{label}} ?",deleteFieldMessage:"Aquest camp s'eliminarà definitivament i es perdran totes les dades associades. Encara vols continuar?",deleteFieldSubmit:"Eliminar",searchFields:"Cercar per etiqueta de camp",customizeWidget:"Personalitzar el widget",addChoices:"Afegir opcions",addChoice:"Afegir una opció",choicePlaceholderSuffix:"Opció",headerFieldTypes:"Tipus de camp",headerFields:"Camps",fieldTypesDragDrop:"Arrossega i deixa anar des d'aquí",behaviour:"Comportament per als agents",fieldLabel:"Etiqueta per als agents",fieldLabelPlaceholder:"Introdueix l'etiqueta del camp",addFieldBtn:"Afegir un camp",saveFieldBtn:"Desar",cancelFieldBtn:"Cancel·lar",lookupAssociationHeader:"Associació",lookupSourceObject:"Objecte font",lookupRelationshipPlaceholder:"Seleccionar la relació",lookupRelationshipLabel:"Tipus de relació",lookupTargetPlaceholder:"Seleccionar l'objecte de destinació",lookupTargetLabel:"Objecte de destinació",relationshipManyToOne:"Molts a un",relationshipManyToOneDesc:"Enllaça molts registres de l'objecte d'origen amb un únic registre de l'objecte de destinació. És a dir, diverses comandes poden haver estat enviades per un mateix contacte.",relationshipOneToOne:"Un a un",relationshipOneToOneDesc:"Enllaça un registre de l'objecte d'origen amb un únic registre de l'objecte de destinació. És a dir, una persona només pot tenir un passaport.",relationshipManyToOneCO:"Diversos registres de <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> es poden associar amb un únic registre de <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipOneToOneCO:"Un registre de <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> es pot associar amb un únic registre de <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipManyToOneNative:"Diversos registres de <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> es poden associar amb un únic <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipOneToOneNative:"Un registre de <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> es pot associar amb un únic <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",customizeWidgetModalHeader:"Personalitzar el widget",customizeWidgetModalHint:"Selecciona fins a 5 camps per mostrar-los al widget.",customizeWidgetModalSaveBtn:"Desar",customizeWidgetModalCancelBtn:"Cancel·lar",noSearchItemsFound:"No s'han trobat camps que coincideixin",errors:{emptyFieldName:"L'etiqueta del camp és obligatòria.",emptyRelationshipType:"El tipus de relació és obligatori.",emptyTargetObject:"L'objecte de destinació és obligatori.",emptyChoice:"El text de l'opció és obligatori.",duplicate:"L'opció desplegable ja existeix",minimum:"Introdueix com a mínim una opció",formErrors:"Corregeix els errors i continua",fieldNameExists:"Hi ha un altre camp amb el mateix nom en aquest formulari. Utilitza un nom diferent.",deleteDropDownChoice:"Eliminar una opció afectarà tots els registres relacionats"},maximumLimits:{filterable:"Es poden seleccionar com a màxim {{count}} camps (sense incloure les cerques) per filtrar registres a la vista de llista.",unique:"Com a màxim, es poden marcar {{count}} camps com a únics.",fields:"Has arribat al límit màxim de {{count}} camps. Elimina un camp actual per crear-ne un de nou.",lookups:"Has arribat al límit màxim de {{count}} camps de cerca. Elimina un camp de cerca actual per crear-ne un de nou."}});var p=e("platformCouiWidgets",{viewAllWidgetRecords:"Veure tots els registres",noRecordsLinked:"No hi ha registres enllaçats",linkWidgetButton:"Enllaça un registre nou",linkModalHeader:"Enllaça un registre nou",linkModalSelectSearchHeader:"Cercar per {{fieldName}}",linkModalSelectSearchPlaceholder:"Cercar...",linkModalSelectEmptySearch:"Comença a escriure...",linkModalSelectNoResultFound:"No s'ha trobat cap registre",linkModalSubmitButton:"Desar",linkModalCancelButton:"Cancel·lar",linkModalSuccess:"Registre actualitzat correctament",linkModalError:"No s'ha pogut actualitzar el registre",checkBoxYesValue:"Sí",checkBoxNoValue:"No",widgetSectionHeader:"{{fieldLabel}} és {{contextLabel}}",linkModalLoadingText:"Recuperant els detalls...",relatedWidgetAccordionHeader:"{{schema}} relacionat"});var u=e("filters",{addFilter:"+ Afegir una altra condició",noFilter:"Encara no has afegit cap filtre",validation:{required:"El valor és obligatori",minMax:"Ha de ser superior a {{fromValue}}"},placeholder:{startRange:"Interval d'inici",endRange:"Interval de finalització",and:"i"}});var m=e("searchDropdown",{placeholder:{search:"Escriu per cercar"}});var g=e("sortSelect",{ascending:"Ascending",descending:"Descending"});var f=e("default",{datepicker:a,dropdown:i,fileUploader:r,modal:l,search:t,form:o,pagination:s,datatable:n,platformTable:c,formBuilder:d,platformCouiWidgets:p,filters:u,export:{modalTitle:"Exporta els registres",exportFormat:"Exporta com:",fields:"Camps",selectAllFields:"Selecciona tots els camps",searchFieldsPrompt:"Cerca els camps",selectedFields:"{{count}} seleccionats",submitButton:"Exporta",cancelButton:"Cancel·lar",noSearchResults:"No s'han trobat resultats",filterInfo:"L'exportació inclou {{filtered}} registres de {{total}} segons els criteris de filtre. <a class='clearExportFilter'>Esborra els filtres</a> per exportar tots els registres."},searchDropdown:m,sortSelect:g})}}}));