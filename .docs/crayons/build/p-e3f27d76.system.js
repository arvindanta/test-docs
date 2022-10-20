System.register([],(function(e){"use strict";return{execute:function(){var o=e("datepicker",{cancel:"Cancelar",update:"Atualizar",to:"até",date:"Data",time:"Time"});var a=e("dropdown",{add:"Adicionar",cancel:"Cancelar"});var i=e("fileUploader",{text:"Carregue o arquivo",description:"ou arraste e solte aqui",acceptError:"Carregue apenas arquivos CSV.",maxFileSizeError:"Tamanho de arquivo excedido.",maxFilesLimitError:"Limite de arquivo excedido.",fileUploadError:"Falha no carregamento do arquivo",uploading:"Carregando",selectedFiles:"Arquivos selecionados",remove:"Remover"});var r=e("modal",{cancel:"Cancelar",ok:"OK"});var s=e("search",{search:"Pesquisar",noItemsFound:"Nenhum item encontrado",noDataAvailable:"Nenhum dado disponível",startTyping:"Comece a digitar..."});var t=e("form",{required:"{{field}} é obrigatório",invalidUrl:"Insira um URL válido",invalidEmail:"Insira um e-mail válido",invalidNumber:"Insira um número válido"});var l=e("pagination",{buttonGroupLabel:"Controles de paginação",previousButtonLabel:"Anterior",nextButtonLabel:"Próximo",content:"<span class='record'>{{start}}</span> a <span class='record'>{{end}}</span> de {{total}}"});var n=e("datatable",{chooseColumns:"Escolher colunas",actions:"Ações",hide:"Ocultar",show:"Mostrar",showMore:"Mostrar mais",showLess:"Mostrar menos",customizeColumns:"Customize columns"});var d=e("platformTable",{delete:"Excluir",sortby:"Ordenar por",orderby:"Ordenar por"});var c=e("formBuilder",{fieldRequired:"Obrigatório ao enviar o formulário",fieldRequiredTag:"Obrigatório",fieldUnique:"Aceitar um valor exclusivo para cada registro",fieldUniqueHoverText:"Dois registros não podem ter o mesmo valor para este campo. Você não poderá alterar esta configuração mais tarde.",fieldUniqueTag:"Exclusivo",fieldFilter:"Use este campo para filtrar registros",fieldFilterHoverText:"Filtre sua lista de registros usando este campo. Você não poderá alterar esta configuração mais tarde.",fieldFilterTag:"Filtrável",fieldTypeRelationship:"Relacionamento de pesquisa",fieldTypeRelationshipDesc:"Crie associações entre dois objetos.",fieldTypeRelationshipDescLinkLabel:"Saiba mais",fieldTypeText:"Texto",fieldTypeParagraph:"Parágrafo",fieldTypeNumber:"Número",fieldTypeDecimal:"Decimal",fieldTypeDate:"Data",fieldTypeDropdown:"Menu suspenso",fieldTypeCheckbox:"Caixa de seleção",fieldTypeMultiselect:"Seleção múltipla",lookupUniqueTag:"Único",primaryFieldTag:"Campo principal",primaryFieldHeader:"Campo principal",primaryFieldNameHint:"Este é o campo principal do objeto que representa exclusivamente cada registro e não pode ser excluído.",deleteFieldTitle:"Tem certeza de que deseja excluir o campo {{label}}?",deleteFieldMessage:"Este campo será excluído permanentemente e todos os dados associados serão perdidos. Você ainda quer continuar?",deleteFieldSubmit:"Excluir",searchFields:"Pesquisar por etiqueta de campo",customizeWidget:"Personalizar widget",addChoices:"Adicionar opções",addChoice:"Adicionar opção",choicePlaceholderSuffix:"Opção",headerFieldTypes:"Tipos de campo",headerFields:"Campos",fieldTypesDragDrop:"Arraste e solte daqui",behaviour:"Comportamento para agentes",fieldLabel:"Etiqueta para agentes",fieldLabelPlaceholder:"Insira a etiqueta de campo",addFieldBtn:"Adicionar campo",saveFieldBtn:"Salvar",cancelFieldBtn:"Cancelar",lookupAssociationHeader:"Associação",lookupSourceObject:"Objeto de origem",lookupRelationshipPlaceholder:"Selecionar relacionamento",lookupRelationshipLabel:"Tipo de relacionamento",lookupTargetPlaceholder:"Selecionar objeto de destino",lookupTargetLabel:"Objeto de destino",relationshipManyToOne:"Muitos para um",relationshipManyToOneDesc:"Vincule muitos registros do objeto de origem a um registro do objeto de destino, ou seja, muitos Pedidos podem ser feitos por um Contato.",relationshipOneToOne:"Um para um",relationshipOneToOneDesc:"Vincule um registro do objeto de origem a apenas um registro do objeto de destino, ou seja, um Indivíduo pode ter apenas um Passaporte.",relationshipManyToOneCO:"Muitos registros de <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> podem ser associados a um registro de <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipOneToOneCO:"Um registro de <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> pode ser associado a um registro de <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipManyToOneNative:"Muitos registros de <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> podem ser associados a um <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipOneToOneNative:"Um registro de <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> pode ser associado a um <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",customizeWidgetModalHeader:"Personalizar widget",customizeWidgetModalHint:"Selecione até 5 campos para exibir no widget.",customizeWidgetModalSaveBtn:"Salvar",customizeWidgetModalCancelBtn:"Cancelar",noSearchItemsFound:"Nenhum campo correspondente encontrado",errors:{emptyFieldName:"A etiqueta de campo é obrigatória.",emptyRelationshipType:"O tipo de relacionamento é obrigatório.",emptyTargetObject:"O objeto de destino é obrigatório.",emptyChoice:"O texto de opção é obrigatório.",duplicate:"A escolha do menu suspenso já existe.",minimum:"Insira no mínimo uma escolha",formErrors:"Corrija os erros e continue",fieldNameExists:"Há outro campo com o mesmo nome neste formulário. Use um nome diferente.",deleteDropDownChoice:"A exclusão de uma escolha afetará todos os registros relacionados."},maximumLimits:{filterable:"No máximo {{count}} campos (excluindo as pesquisas) podem ser selecionados para filtrar registros na exibição de lista.",unique:"No máximo {{count}} campos podem ser marcados como exclusivos.",fields:"Atingiu o limite máximo de {{count}} campos. Exclua um campo existente para criar outro.",lookups:"Atingiu o limite máximo de {{count}} campos de pesquisa. Exclua um campo de pesquisa existente para criar outro."}});var p=e("platformCouiWidgets",{viewAllWidgetRecords:"Visualizar todos os registros",noRecordsLinked:"Nenhum registro vinculado",linkWidgetButton:"Vincular um novo registro",linkModalHeader:"Vincular um novo registro",linkModalSelectSearchHeader:"Pesquisar por {{fieldName}}",linkModalSelectSearchPlaceholder:"Pesquisar...",linkModalSelectEmptySearch:"Comece a digitar...",linkModalSelectNoResultFound:"Nenhum registro encontrado",linkModalSubmitButton:"Salvar",linkModalCancelButton:"Cancelar",linkModalSuccess:"Registro atualizado com sucesso",linkModalError:"Não foi possível atualizar o registro",checkBoxYesValue:"Sim",checkBoxNoValue:"Não",widgetSectionHeader:"{{fieldLabel}} é {{contextLabel}}",linkModalLoadingText:"Buscando detalhes...",relatedWidgetAccordionHeader:"{{schema}} relacionado"});var u=e("filters",{addFilter:"+ Adicionar outra condição",noFilter:"Você ainda não adicionou filtros.",validation:{required:"O valor é obrigatório.",minMax:"Deve ser maior que {{fromValue}}."},placeholder:{startRange:"Intervalo inicial",endRange:"Intervalo final",and:"e"}});var m=e("searchDropdown",{placeholder:{search:"Digite para pesquisar"}});var g=e("sortSelect",{ascending:"Ascending",descending:"Descending"});var f=e("default",{datepicker:o,dropdown:a,fileUploader:i,modal:r,search:s,form:t,pagination:l,datatable:n,platformTable:d,formBuilder:c,platformCouiWidgets:p,filters:u,export:{modalTitle:"Exportar relatórios",exportFormat:"Exportar como:",fields:"Campos",selectAllFields:"Selecionar todos os campos",searchFieldsPrompt:"Pesquisar campos",selectedFields:"{{count}} selecionado",submitButton:"Exportar",cancelButton:"Cancelar",noSearchResults:"Nenhum resultado encontrado",filterInfo:"A exportação inclui {{filtered}} de {{total}} registros com base nos critérios de filtro. <a class='clearExportFilter'>Limpar filtros</a> para exportar todos os registros"},searchDropdown:m,sortSelect:g})}}}));