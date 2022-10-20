System.register([],(function(e){"use strict";return{execute:function(){var i=e("datepicker",{cancel:"Annulla",update:"Aggiorna",to:"al",date:"Data",time:"Time"});var o=e("dropdown",{add:"Aggiungi",cancel:"Annulla"});var a=e("fileUploader",{text:"Carica file",description:"o trascina qui",acceptError:"Carica solo file CSV.",maxFileSizeError:"Dimensioni massime del file superate.",maxFilesLimitError:"Limite massimo di file superato.",fileUploadError:"Impossibile caricare file",uploading:"Caricamento",selectedFiles:"File selezionati",remove:"Rimuovi"});var l=e("modal",{cancel:"Annulla",ok:"OK"});var r=e("search",{search:"Cerca",noItemsFound:"Nessun elemento trovato",noDataAvailable:"Nessun dato disponibile",startTyping:"Inizia a scrivere..."});var n=e("form",{required:"{{field}} è richiesto",invalidUrl:"Inserisci un URL valido",invalidEmail:"Inserisci un’email valida",invalidNumber:"Inserisci un numero valido"});var t=e("pagination",{buttonGroupLabel:"Controlli di impaginazione",previousButtonLabel:"Precedente",nextButtonLabel:"Successivo",content:"Da <span class='record'>{{start}}</span> a <span class='record'>{{end}}</span> su {{total}}"});var s=e("datatable",{chooseColumns:"Scegli colonne",actions:"Azioni",hide:"Nascondi",show:"Mostra",showMore:"Mostra di più",showLess:"Mostra meno",customizeColumns:"Customize columns"});var d=e("platformTable",{delete:"Elimina",sortby:"Ordina per",orderby:"Ordina per"});var c=e("formBuilder",{fieldRequired:"Richiesto quando si invia il modulo",fieldRequiredTag:"Richiesto",fieldUnique:"Accetta un valore univoco per ogni record",fieldUniqueHoverText:"Nessun record può avere lo stesso valore di un altro per questo campo. Non è possibile modificare questa impostazione in seguito.",fieldUniqueTag:"Univoco",fieldFilter:"Usa questo campo per filtrare i record",fieldFilterHoverText:"Filtra il tuo elenco di record utilizzando questo campo. Non è possibile modificare questa impostazione in seguito.",fieldFilterTag:"Filtrabile",fieldTypeRelationship:"Relazione di lookup",fieldTypeRelationshipDesc:"Crea associazioni tra due oggetti.",fieldTypeRelationshipDescLinkLabel:"Ulteriori informazioni",fieldTypeText:"Testo",fieldTypeParagraph:"Paragrafo",fieldTypeNumber:"Numero",fieldTypeDecimal:"Decimale",fieldTypeDate:"Data",fieldTypeDropdown:"Menu a discesa",fieldTypeCheckbox:"Casella di controllo",fieldTypeMultiselect:"Selezione multipla",lookupUniqueTag:"Unico",primaryFieldTag:"Campo primario",primaryFieldHeader:"Campo primario",primaryFieldNameHint:"Questo è il campo primario dell’oggetto che rappresenta in modo univoco ciascun record e non può essere eliminato.",deleteFieldTitle:"Confermi di voler rimuovere il campo {{label}}?",deleteFieldMessage:"Questo campo verrà eliminato definitivamente e tutti i dati associati andranno persi. Confermi di voler proseguire?",deleteFieldSubmit:"Elimina",searchFields:"Cerca per etichetta del campo",customizeWidget:"Personalizza widget",addChoices:"Aggiungi scelte",addChoice:"Aggiungi scelta",choicePlaceholderSuffix:"Scelta",headerFieldTypes:"Tipi di campo",headerFields:"Campi",fieldTypesDragDrop:"Trascina da qui",behaviour:"Comportamento per operatori",fieldLabel:"Etichetta per operatori",fieldLabelPlaceholder:"Inserisci l’etichetta del campo",addFieldBtn:"Aggiungi campo",saveFieldBtn:"Salva",cancelFieldBtn:"Annulla",lookupAssociationHeader:"Associazione",lookupSourceObject:"Oggetto di origine",lookupRelationshipPlaceholder:"Seleziona relazione",lookupRelationshipLabel:"Tipo di relazione",lookupTargetPlaceholder:"Seleziona l’oggetto di destinazione",lookupTargetLabel:"Oggetto di destinazione",relationshipManyToOne:"Molti a uno",relationshipManyToOneDesc:"Collega più record dell’oggetto di origine con un unico record dell’oggetto di destinazione. Ad esempio, più ordini possono effettuati da un unico contatto.",relationshipOneToOne:"Uno a uno",relationshipOneToOneDesc:"Collega un unico record dell’oggetto di origine con un unico record dell’oggetto di destinazione. Ad esempio, una persona può avere un solo passaporto.",relationshipManyToOneCO:"Più record di <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> possono essere associati con un unico record di <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipOneToOneCO:"Un unico record di <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> può essere associato con un unico record di <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipManyToOneNative:"Più record di <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> possono essere associati con un unico <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipOneToOneNative:"Un unico record di <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> può essere associato con un unico <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",customizeWidgetModalHeader:"Personalizza widget",customizeWidgetModalHint:"Seleziona fino a 5 campi da visualizzare nel widget.",customizeWidgetModalSaveBtn:"Salva",customizeWidgetModalCancelBtn:"Annulla",noSearchItemsFound:"Nessun campo corrispondente trovato",errors:{emptyFieldName:"L’etichetta del campo è obbligatoria.",emptyRelationshipType:"Il tipo di relazione è obbligatorio.",emptyTargetObject:"L’oggetto di destinazione è obbligatorio.",emptyChoice:"Il testo della scelta è obbligatorio.",duplicate:"La scelta del menu discesa esiste già",minimum:"Inserisci almeno una scelta",formErrors:"Correggi gli errori e continua",fieldNameExists:"C’è un altro campo con lo stesso nome in questo modulo. Usa un nome diverso.",deleteDropDownChoice:"L’eliminazione di una scelta influirà su tutti i record correlati"},maximumLimits:{filterable:"È possibile selezionare al massimo {{count}} campi (esclusi lookup) per filtrare i record nella vista elenco.",unique:"È possibile contrassegnare al massimo {{count}} campi come univoci.",fields:"È stato raggiunto il limite massimo di {{count}} campi. Elimina un campo esistente per crearne uno nuovo.",lookups:"È stato raggiunto il limite massimo di {{count}} campi di lookup. Elimina un campo di lookup esistente per crearne uno nuovo."}});var u=e("platformCouiWidgets",{viewAllWidgetRecords:"Vedi tutti i record",noRecordsLinked:"Nessun record collegato",linkWidgetButton:"Collega un nuovo record",linkModalHeader:"Collega un nuovo record",linkModalSelectSearchHeader:"Cerca per {{fieldName}}",linkModalSelectSearchPlaceholder:"Cerca...",linkModalSelectEmptySearch:"Inizia a scrivere...",linkModalSelectNoResultFound:"Nessun record trovato",linkModalSubmitButton:"Salva",linkModalCancelButton:"Annulla",linkModalSuccess:"Record aggiornato correttamente",linkModalError:"Impossibile aggiornare il record",checkBoxYesValue:"Sì",checkBoxNoValue:"No",widgetSectionHeader:"{{fieldLabel}} è {{contextLabel}}",linkModalLoadingText:"Recupero dettagli...",relatedWidgetAccordionHeader:"{{schema}} correlato"});var p=e("filters",{addFilter:"+ Aggiungi un’altra condizione",noFilter:"Non hai ancora aggiunto nessun filtro",validation:{required:"Il valore è richiesto",minMax:"Deve essere maggiore di {{fromValue}}"},placeholder:{startRange:"Inizio intervallo",endRange:"Fine intervallo",and:"e"}});var m=e("searchDropdown",{placeholder:{search:"Scrivi per cercare"}});var g=e("sortSelect",{ascending:"Ascending",descending:"Descending"});var f=e("default",{datepicker:i,dropdown:o,fileUploader:a,modal:l,search:r,form:n,pagination:t,datatable:s,platformTable:d,formBuilder:c,platformCouiWidgets:u,filters:p,export:{modalTitle:"Esporta record",exportFormat:"Esporta come:",fields:"Campi",selectAllFields:"Seleziona tutti i campi",searchFieldsPrompt:"Campi di ricerca",selectedFields:"Selezionati: {{count}}",submitButton:"Esporta",cancelButton:"Annulla",noSearchResults:"Nessun risultato trovato",filterInfo:"Verranno esportati {{filtered}} di {{total}} record secondo i criteri di filtro. <a class='clearExportFilter'>Cancella filtri</a> per esportare tutti i record"},searchDropdown:m,sortSelect:g})}}}));