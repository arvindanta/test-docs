var e={cancel:"Zrušit",update:"Aktualizovat",to:"do",date:"Datum",time:"Time"},o={add:"Přidat",cancel:"Strono"},a={text:"Nahrát soubor",description:"nebo sem přetáhněte",acceptError:"Nahrávejte pouze soubory CSV.",maxFileSizeError:"Překročena velikost souboru.",maxFilesLimitError:"Byl překročen limit souborů.",fileUploadError:"Nahrání souboru se nezdařilo",uploading:"Nahrávání",selectedFiles:"Vybrané soubory",remove:"Odebrat"},t={cancel:"Strono",ok:"OK"},n={search:"Hledat",noItemsFound:"Nenalezeny žádné položky",noDataAvailable:"Nejsou dostupná žádná data",startTyping:"Začněte psát..."},l={required:"{{field}} je vyžadováno",invalidUrl:"Zadejte platnou adresu URL",invalidEmail:"Zadejte platný e-mail",invalidNumber:"Zadejte platné číslo"},i={buttonGroupLabel:"Ovládání stránkování",previousButtonLabel:"Předchozí",nextButtonLabel:"Další",content:"<span class='record'>{{start}}</span> do <span class='record'>{{end}}</span> z {{total}}"},d={chooseColumns:"Vyberte sloupce",actions:"Akce",hide:"Skrýt",show:"Ukázat",showMore:"Zobrazit více",showLess:"Zobrazit méně",customizeColumns:"Customize columns"},r={delete:"Smazat",sortby:"Třídit podle",orderby:"Seřadit podle"},s={fieldRequired:"Povinné pro odesílání formuláře",fieldRequiredTag:"Požadované",fieldUnique:"Přijmout pouze jedinečnou hodnotu pro každý záznam",fieldUniqueHoverText:"Žádné dva záznamy nemohou mít pro toto pole stejnou hodnotu. Toto nastavení nebudete moci později změnit.",fieldUniqueTag:"Jedinečné",fieldFilter:"Toto pole použijte k filtrování záznamů",fieldFilterHoverText:"Filtrujte svůj seznam záznamů pomocí tohoto pole. Toto nastavení nebudete moci později změnit.",fieldFilterTag:"Filtrovatelné",fieldTypeRelationship:"Vyhledávací vztah",fieldTypeRelationshipDesc:"Vytvářejte asociace mezi dvěma objekty.",fieldTypeRelationshipDescLinkLabel:"Zjistěte více",fieldTypeText:"Text",fieldTypeParagraph:"Odstavec",fieldTypeNumber:"Číslo",fieldTypeDecimal:"Desetinná",fieldTypeDate:"Datum",fieldTypeDropdown:"Rozbalovací menu",fieldTypeCheckbox:"Zaškrtávací pole",fieldTypeMultiselect:"Vícenásobný výběr",lookupUniqueTag:"Jedinečné",primaryFieldTag:"Primární pole",primaryFieldHeader:"Primární pole",primaryFieldNameHint:"Toto je primární pole objektu, které jedinečně představuje každý záznam a nelze jej odstranit.",deleteFieldTitle:"Opravdu chcete smazat pole {{label}} ?",deleteFieldMessage:"Toto pole bude trvale smazáno a všechna související data budou ztracena. Stále chcete pokračovat?",deleteFieldSubmit:"Smazat",searchFields:"Vyhledávání podle štítku pole",customizeWidget:"Přizpůsobit widget",addChoices:"Přidat možnosti",addChoice:"Přidat možnost",choicePlaceholderSuffix:"Volba",headerFieldTypes:"Typy polí",headerFields:"Pole",fieldTypesDragDrop:"Přetáhněte odtud",behaviour:"Chování pro agenty",fieldLabel:"Štítek pro agenty",fieldLabelPlaceholder:"Zadejte štítek pole",addFieldBtn:"Přidat pole",saveFieldBtn:"Uložit",cancelFieldBtn:"Strono",lookupAssociationHeader:"Asociace",lookupSourceObject:"Zdrojový objekt",lookupRelationshipPlaceholder:"Vyberte vztah",lookupRelationshipLabel:"Typ vztahu",lookupTargetPlaceholder:"Vyberte cílový objekt",lookupTargetLabel:"Cílový objekt",relationshipManyToOne:"Mnoho k jednomu",relationshipManyToOneDesc:"Propojte mnoho záznamů zdrojového objektu s jedním záznamem cílového objektu. tj. Kontakt může zadat mnoho objednávek.",relationshipOneToOne:"Jeden na jednoho",relationshipOneToOneDesc:"Propojte jeden záznam zdrojového objektu pouze s jedním záznamem cílového objektu. tj. Osoba může mít pouze jeden cestovní pas.",relationshipManyToOneCO:"Mnoho záznamů <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> může být přidruženo s jedním záznamem <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipOneToOneCO:"Jeden záznam <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> může být přidružen s jedním záznamem <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipManyToOneNative:"Mnoho záznamů <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> může být přidruženo s jedním <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipOneToOneNative:"Jeden záznam <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> může být přidružen s jedním <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",customizeWidgetModalHeader:"Přizpůsobit widget",customizeWidgetModalHint:"Vyberte až 5 polí pro zobrazení na widgetu.",customizeWidgetModalSaveBtn:"Uložit",customizeWidgetModalCancelBtn:"Strono",noSearchItemsFound:"Nebyla nalezena žádná odpovídající pole",errors:{emptyFieldName:"Šítek pole je povinný.",emptyRelationshipType:"Typ vztahu je povinný.",emptyTargetObject:"Cílový objekt je povinný.",emptyChoice:"Text možnosti je povinný.",duplicate:"Rozbalovací nabídka již existuje",minimum:"Zadejte alespoň jednu možnost",formErrors:"Opravte chyby a pokračujte",fieldNameExists:"V tomto formuláři je další pole se stejným názvem. Použijte prosím jiný název.",deleteDropDownChoice:"Odstranění možnosti ovlivní všechny související záznamy"},maximumLimits:{filterable:"Pro filtrování záznamů v zobrazení seznamu lze vybrat maximálně {{count}} polí (mimo vyhledávání).",unique:"Maximálně {{count}} polí může být označeno za jedinečné.",fields:"Bylo dosaženo maximálního limitu {{count}} polí. Chcete-li vytvořit nové, odstraňte existující pole.",lookups:"Bylo dosaženo maximálního limitu {{count}} vyhledávacích polí. Chcete-li vytvořit nové vyhledávací pole, odstraňte existující pole."}},p={viewAllWidgetRecords:"Zobrazit všechny záznamy",noRecordsLinked:"Žádné propojené záznamy",linkWidgetButton:"Propojit nový záznam",linkModalHeader:"Propojit nový záznam",linkModalSelectSearchHeader:"Hledat podle {{fieldName}}",linkModalSelectSearchPlaceholder:"Hledat...",linkModalSelectEmptySearch:"Začněte psát...",linkModalSelectNoResultFound:"Nebyly nalezeny žádné záznamy",linkModalSubmitButton:"Uložit",linkModalCancelButton:"Zrušit",linkModalSuccess:"Záznam byl úspěšně aktualizován",linkModalError:"Záznam nelze aktualizovat",checkBoxYesValue:"Ano",checkBoxNoValue:"Ne",widgetSectionHeader:"{{fieldLabel}} je {{contextLabel}}",linkModalLoadingText:"Načítání podrobností...",relatedWidgetAccordionHeader:"Související {{schema}}"},m={addFilter:"+ Přidat novou podmínku",noFilter:"Zatím jste nepřidali žádné filtry",validation:{required:"Hodnota je povinná",minMax:"Musí být větší než {{fromValue}}"},placeholder:{startRange:"Začátek rozsahu",endRange:"Konec rozsahu",and:"a"}},c={placeholder:{search:"Pro vyhledání vepište"}},u={ascending:"Ascending",descending:"Descending"},z={datepicker:e,dropdown:o,fileUploader:a,modal:t,search:n,form:l,pagination:i,datatable:d,platformTable:r,formBuilder:s,platformCouiWidgets:p,filters:m,export:{modalTitle:"Exportovat záznamy",exportFormat:"Exportovat jako:",fields:"Pole",selectAllFields:"Vybrat všechna pole",searchFieldsPrompt:"Hledat pole",selectedFields:"vybráno: {{count}}",submitButton:"Exportovat",cancelButton:"Zrušit",noSearchResults:"Nebyly nalezeny žádné výsledky",filterInfo:"Export obsahuje {{filtered}} z {{total}} záznamů na základě kritérií filtru. <a class='clearExportFilter'>Vymazáním filtrů</a> exportujte všechny záznamy"},searchDropdown:c,sortSelect:u};export default z;export{d as datatable,e as datepicker,o as dropdown,a as fileUploader,m as filters,l as form,s as formBuilder,t as modal,i as pagination,p as platformCouiWidgets,r as platformTable,n as search,c as searchDropdown,u as sortSelect}