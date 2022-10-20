System.register([],(function(e){"use strict";return{execute:function(){var a=e("datepicker",{cancel:"إلغاء",update:"تحديث",to:"إلى",date:"التاريخ",time:"Time"});var l=e("dropdown",{add:"إضافة",cancel:"إلغاء"});var i=e("fileUploader",{text:"تحميل الملف",description:"أو اسحب وأفلت هنا",acceptError:"تحميل ملفات CSV فقط.",maxFileSizeError:"تم تجاوز حجم الملف.",maxFilesLimitError:"تم تجاوز حد الملف.",fileUploadError:"فشل تحميل الملف",uploading:"التحميل جارٍ",selectedFiles:"الملفات المحدّدة",remove:"إزالة"});var o=e("modal",{cancel:"إلغاء",ok:"موافق"});var t=e("search",{search:"بحث",noItemsFound:"لا توجد عناصر",noDataAvailable:"لا توجد بيانات متوفرة",startTyping:"ابدأ الكتابة..."});var r=e("form",{required:"{{field}} مطلوب",invalidUrl:"أدخل عنوان URL صالح",invalidEmail:"أدخل عنوان بريد إلكتروني صالح",invalidNumber:"أدخل رقمًا صالحًا"});var n=e("pagination",{buttonGroupLabel:"ضوابط ترقيم الصفحات",previousButtonLabel:"السابق",nextButtonLabel:"التالي",content:"<span class='record'>{{start}}</span> إلى <span class='record'>{{end}}</span> من أصل {{total}}"});var d=e("datatable",{chooseColumns:"اختر الأعمدة",actions:"الإجراءات",hide:"إخفاء",show:"إظهار",showMore:"اعرض المزيد",showLess:"اعرض أقل",customizeColumns:"Customize columns"});var s=e("platformTable",{delete:"حذف",sortby:"فرز بحسب",orderby:"ترتيب بحسب"});var c=e("formBuilder",{fieldRequired:"مطلوب عند إرسال النموذج",fieldRequiredTag:"مطلوب",fieldUnique:"قبول قيمة فريدة لكل سجل",fieldUniqueHoverText:"لا يمكن أن يمتلك سجلان القيمة نفسها لهذا الحقل. لن تتمكن من تغيير هذا الإعداد لاحقًا.",fieldUniqueTag:"فريد",fieldFilter:"استخدم هذا الحقل لتصفية السجلات",fieldFilterHoverText:"تصفية قائمة السجلات باستخدام هذا الحقل. لن تتمكن من تغيير هذا الإعداد لاحقًا.",fieldFilterTag:"قابل للتصفية",fieldTypeRelationship:"علاقة بحث",fieldTypeRelationshipDesc:"إنشاء ارتباطات بين كائنين اثنين.",fieldTypeRelationshipDescLinkLabel:"اعرف المزيد",fieldTypeText:"نص",fieldTypeParagraph:"فقرة",fieldTypeNumber:"رقم",fieldTypeDecimal:"عشري",fieldTypeDate:"التاريخ",fieldTypeDropdown:"قائمة منسدلة",fieldTypeCheckbox:"خانة اختيار",fieldTypeMultiselect:"تحديد متعدد",lookupUniqueTag:"فريد",primaryFieldTag:"حقل أساسي",primaryFieldHeader:"حقل أساسي",primaryFieldNameHint:"هذا هو الحقل الأساسي للكائن والذي يمثل كل سجل بشكل فريد ولا يمكن حذفه.",deleteFieldTitle:"هل تريد بالتأكيد حذف الحقل، {{label}}؟",deleteFieldMessage:"سيتم حذف هذا الحقل نهائيًا وستفقد جميع البيانات المرتبطة به. ألا زلت تريد المتابعة؟",deleteFieldSubmit:"احذف",searchFields:"البحث عن طريق تسمية الحقل",customizeWidget:"تخصيص عنصر الواجهة",addChoices:"إضافة خيارات",addChoice:"إضافة خيار",choicePlaceholderSuffix:"خيار",headerFieldTypes:"أنواع الحقول",headerFields:"الحقول",fieldTypesDragDrop:"اسحب وأفلت من هنا",behaviour:"السلوك للمندوبين",fieldLabel:"التسمية للمندوبين",fieldLabelPlaceholder:"أدخل تسمية الحقل",addFieldBtn:"إضافة حقل",saveFieldBtn:"حفظ",cancelFieldBtn:"إلغاء",lookupAssociationHeader:"الارتباط",lookupSourceObject:"كائن مصدر",lookupRelationshipPlaceholder:"حدّد العلاقة",lookupRelationshipLabel:"نوع العلاقة",lookupTargetPlaceholder:"حدّد الكائن الهدف",lookupTargetLabel:"الكائن الهدف",relationshipManyToOne:"اربط العديد بواحد",relationshipManyToOneDesc:"اربط العديد من سجلات الكائن المصدر بسجل واحد من الكائن الهدف. على سبيل المثال، يمكن إنشاء العديد من الطلبات بواسطة جهة اتصال واحدة.",relationshipOneToOne:"اربط واحدًا بواحد",relationshipOneToOneDesc:"اربط سجلًا واحدًا من سجلات الكائن المصدر بسجل واحد للكائن الهدف. على سبيل المثال، يمكن أن يمتلك الفرد جواز سفر واحدًا فقط.",relationshipManyToOneCO:"يمكن ربط العديد من سجلات <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> بسجل واحد من <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipOneToOneCO:"يمكن ربط سجل واحد من <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> بسجل واحد من <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>.",relationshipManyToOneNative:"يمكن ربط العديد من سجلات <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> بـ <span class='fb-field-lookup-relationship-object-name'>{{target}}</span> واحد.",relationshipOneToOneNative:"يمكن ربط سجل واحد من <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> بـ <span class='fb-field-lookup-relationship-object-name'>{{target}}</span> واحد.",customizeWidgetModalHeader:"تخصيص عنصر الواجهة",customizeWidgetModalHint:"حدّد ما يصل إلى 5 حقول لعرضها في عنصر الواجهة.",customizeWidgetModalSaveBtn:"حفظ",customizeWidgetModalCancelBtn:"إلغاء",noSearchItemsFound:"لا توجد حقول مطابقة",errors:{emptyFieldName:"تسمية الحقل مطلوبة.",emptyRelationshipType:"نوع العلاقة مطلوب.",emptyTargetObject:"الكائن الهدف مطلوب.",emptyChoice:"نص الخيار مطلوب.",duplicate:"خيار القائمة المنسدلة موجود بالفعل",minimum:"أدخل ما لا يقل عن خيار واحد",formErrors:"يُرجى تصحيح الأخطاء والمتابعة",fieldNameExists:"يوجد حقل آخر بنفس الاسم في هذا النموذج. يُرجى استخدام اسم آخر.",deleteDropDownChoice:"سيؤثر حذف الخيار على جميع السجلات ذات الصلة"},maximumLimits:{filterable:"يمكن تحديد {{count}} من الحقول كحد أقصى (باستثناء عمليات البحث) لتصفية السجلات في طريقة عرض القائمة.",unique:'يمكن وضع علامة "فريد" على {{count}} من الحقول كحد أقصى.',fields:"تم الوصول إلى الحد الأقصى لعدد الحقول والبالغ {{count}} حقل. احذف حقلاً موجودًا لإنشاء حقل جديد.",lookups:"تم الوصول إلى الحد الأقصى لعدد حقول البحث والبالغ {{count}} حقل. احذف حقل بحث موجودًا لإنشاء حقل جديد."}});var p=e("platformCouiWidgets",{viewAllWidgetRecords:"عرض جميع السجلات",noRecordsLinked:"لا توجد سجلات مرتبطة",linkWidgetButton:"ربط سجل جديد",linkModalHeader:"ربط سجل جديد",linkModalSelectSearchHeader:"البحث بحسب {{fieldName}}",linkModalSelectSearchPlaceholder:"بحث...",linkModalSelectEmptySearch:"ابدأ الكتابة...",linkModalSelectNoResultFound:"لا توجد سجلات",linkModalSubmitButton:"حفظ",linkModalCancelButton:"إلغاء",linkModalSuccess:"تم تحديث السجل بنجاح",linkModalError:"تعذّر تحديث السجل",checkBoxYesValue:"نعم",checkBoxNoValue:"لا",widgetSectionHeader:"{{fieldLabel}} هو {{contextLabel}}",linkModalLoadingText:"جلب التفاصيل جارٍ...",relatedWidgetAccordionHeader:"{{schema}} ذات الصلة"});var u=e("filters",{addFilter:"+ أضِف شرطًا آخرًا",noFilter:"لم تقم بإضافة أي عوامل تصفية بعد",validation:{required:"القيمة مطلوبة",minMax:"يجب أن يكون أكبر من {{fromValue}}"},placeholder:{startRange:"نطاق البداية",endRange:"نطاق النهاية",and:"و"}});var m=e("searchDropdown",{placeholder:{search:"اكتب للبحث"}});var f=e("sortSelect",{ascending:"Ascending",descending:"Descending"});var h=e("default",{datepicker:a,dropdown:l,fileUploader:i,modal:o,search:t,form:r,pagination:n,datatable:d,platformTable:s,formBuilder:c,platformCouiWidgets:p,filters:u,export:{modalTitle:"تصدير السجلات",exportFormat:"صدّر كـ:",fields:"الحقول",selectAllFields:"حدّد كافة الحقول",searchFieldsPrompt:"ابحث في الحقول",selectedFields:"تم تحديد {{count}}",submitButton:"تصدير",cancelButton:"إلغاء",noSearchResults:"لم يتم العثور على نتائج",filterInfo:"يتضمن التصدير {{filtered}} من أصل {{total}} من السجلات بناءً على معايير التصفية. <a class='clearExportFilter'>أزل عوامل التصفية</a> لتصدير جميع السجلات"},searchDropdown:m,sortSelect:f})}}}));