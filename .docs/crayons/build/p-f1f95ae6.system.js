System.register([],(function(e){"use strict";return{execute:function(){var a=e("datepicker",{cancel:"ยกเลิก",update:"อัปเดต",to:"ถึง",date:"วันที่",time:"Time"});var l=e("dropdown",{add:"เพิ่ม",cancel:"ยกเลิก"});var i=e("fileUploader",{text:"อัปโหลดไฟล์",description:"หรือลากและวางที่นี่",acceptError:"อัปโหลดไฟล์ CSV เท่านั้น",maxFileSizeError:"เกินขนาดไฟล์",maxFilesLimitError:"เกินขีดจำกัดไฟล์",fileUploadError:"อัปโหลดไฟล์ไม่สำเร็จ",uploading:"กำลังอัปโหลด",selectedFiles:"ไฟล์ที่เลือก",remove:"ลบ"});var o=e("modal",{cancel:"ยกเลิก",ok:"ตกลง"});var t=e("search",{search:"ค้นหา",noItemsFound:"ไม่พบรายการ",noDataAvailable:"ไม่มีข้อมูล",startTyping:"เริ่มพิมพ์..."});var r=e("form",{required:"ต้องมี {{field}}",invalidUrl:"กรอก URL ที่ถูกต้อง",invalidEmail:"กรอกอีเมลที่ถูกต้อง",invalidNumber:"กรอกหมายเลขที่ถูกต้อง"});var n=e("pagination",{buttonGroupLabel:"การควบคุมการแบ่งหน้า",previousButtonLabel:"ก่อนหน้า",nextButtonLabel:"ถัดไป",content:"<span class='record'>{{start}}</span> ถึง <span class='record'>{{end}}</span> จาก {{total}}"});var d=e("datatable",{chooseColumns:"เลือกคอลัมน์",actions:"การดำเนินการ",hide:"ซ่อน",show:"แสดง",showMore:"แสดงเพิ่มเติม",showLess:"แสดงน้อยลง",customizeColumns:"Customize columns"});var s=e("platformTable",{delete:"ลบ",sortby:"จัดเรียงตาม",orderby:"เรียงลำดับตาม"});var c=e("formBuilder",{fieldRequired:"จำเป็นเมื่อส่งแบบฟอร์ม",fieldRequiredTag:"จำเป็น",fieldUnique:"ยอมรับค่าที่ไม่ซ้ำกันสำหรับบันทึกทุกรายการ",fieldUniqueHoverText:"บันทึกสองรายการไม่สามารถมีค่าเดียวกันสำหรับฟิลด์นี้ได้ คุณจะไม่สามารถเปลี่ยนการตั้งค่านี้ได้ในภายหลัง",fieldUniqueTag:"ไม่ซ้ำกัน",fieldFilter:"ใช้ฟิลด์นี้เพื่อคัดกรองบันทึก",fieldFilterHoverText:"คัดกรองลิสต์บันทึกของคุณโดยใช้ฟิลด์นี้ คุณจะไม่สามารถเปลี่ยนการตั้งค่านี้ได้ในภายหลัง",fieldFilterTag:"คัดกรองได้",fieldTypeRelationship:"ความสัมพันธ์เพื่อการค้นหา",fieldTypeRelationshipDesc:"สร้างความเชื่อมโยงระหว่างอ็อบเจกต์สองรายการ",fieldTypeRelationshipDescLinkLabel:"เรียนรู้เพิ่มเติม",fieldTypeText:"ข้อความ",fieldTypeParagraph:"ย่อหน้า",fieldTypeNumber:"ตัวเลข",fieldTypeDecimal:"ทศนิยม",fieldTypeDate:"วันที่",fieldTypeDropdown:"ดร็อปดาวน์",fieldTypeCheckbox:"กล่องทำเครื่องหมาย",fieldTypeMultiselect:"เลือกหลายรายการ",lookupUniqueTag:"ไม่ซ้ำกัน",primaryFieldTag:"ฟิลด์หลัก",primaryFieldHeader:"ฟิลด์หลัก",primaryFieldNameHint:"นี่คือฟิลด์หลักของอ็อบเจกต์ที่แสดงถึงบันทึกแต่ละรายการที่ไม่ซ้ำกัน และไม่สามารถลบได้",deleteFieldTitle:"คุณแน่ใจหรือว่าต้องการลบฟิลด์ {{label}} ?",deleteFieldMessage:"ฟิลด์นี้จะถูกลบอย่างถาวรและข้อมูลที่เกี่ยวข้องทั้งหมดจะหายไป คุณยังต้องการดำเนินการต่อหรือไม่?",deleteFieldSubmit:"ลบ",searchFields:"ค้นหาด้วยป้ายฟิลด์",customizeWidget:"ปรับแต่งวิดเจ็ต",addChoices:"เพิ่มตัวเลือก",addChoice:"เพิ่มตัวเลือก",choicePlaceholderSuffix:"ตัวเลือก",headerFieldTypes:"ประเภทฟิลด์",headerFields:"ฟิลด์",fieldTypesDragDrop:"ลากและวางจากที่นี่",behaviour:"ลักษณะการทำงานสำหรับเจ้าหน้าที่",fieldLabel:"ป้ายสำหรับเจ้าหน้าที่",fieldLabelPlaceholder:"กรอกป้ายฟิลด์",addFieldBtn:"เพิ่มฟิลด์",saveFieldBtn:"บันทึก",cancelFieldBtn:"ยกเลิก",lookupAssociationHeader:"ความเชื่อมโยง",lookupSourceObject:"อ็อบเจกต์ต้นทาง",lookupRelationshipPlaceholder:"เลือกความสัมพันธ์",lookupRelationshipLabel:"ประเภทความสัมพันธ์",lookupTargetPlaceholder:"เลือกอ็อบเจกต์เป้าหมาย",lookupTargetLabel:"อ็อบเจกต์เป้าหมาย",relationshipManyToOne:"หลายรายการกับหนึ่ง",relationshipManyToOneDesc:"เชื่อมโยงบันทึกหลายรายการของอ็อบเจกต์ต้นทางกับบันทึกหนึ่งรายการของอ็อบเจกต์เป้าหมาย เช่น ผู้ติดต่อหนึ่งรายสามารถส่งคำสั่งซื้อหลายรายการได้",relationshipOneToOne:"หนึ่งกับหนึ่ง",relationshipOneToOneDesc:"เชื่อมโยงบันทึกหนึ่งรายการของอ็อบเจกต์ต้นทางกับบันทึกเพียงหนึ่งรายการของอ็อบเจกต์เป้าหมาย เช่น บุคคลจะมีหนังสือเดินทางได้เพียงเล่มเดียวเท่านั้น",relationshipManyToOneCO:"บันทึกหลายรายการของ <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> สามารถเชื่อมโยงกับบันทึกหนึ่งรายการของ <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>",relationshipOneToOneCO:"บันทึกหนึ่งรายการของ <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> สามารถเชื่อมโยงกับบันทึกหนึ่งรายการของ <span class='fb-field-lookup-relationship-object-name'>{{target}}</span>",relationshipManyToOneNative:"บันทึกหลายรายการของ <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> สามารถเชื่อมโยงกับ <span class='fb-field-lookup-relationship-object-name'>{{target}}</span> หนึ่งรายการ",relationshipOneToOneNative:"บันทึกหนึ่งรายการของ <span class='fb-field-lookup-relationship-object-name'>{{source}}</span> สามารถเชื่อมโยงกับ <span class='fb-field-lookup-relationship-object-name'>{{target}}</span> หนึ่งรายการ",customizeWidgetModalHeader:"ปรับแต่งวิดเจ็ต",customizeWidgetModalHint:"เลือกสูงสุด 5 ฟิลด์เพื่อแสดงบนวิดเจ็ต",customizeWidgetModalSaveBtn:"บันทึก",customizeWidgetModalCancelBtn:"ยกเลิก",noSearchItemsFound:"ไม่พบฟิลด์ที่ตรงกัน",errors:{emptyFieldName:"ต้องระบุป้ายฟิลด์",emptyRelationshipType:"ต้องระบุประเภทความสัมพันธ์",emptyTargetObject:"ต้องระบุอ็อบเจกต์เป้าหมาย",emptyChoice:"ต้องระบุข้อความของตัวเลือก",duplicate:"มีตัวเลือกแบบดร็อปดาวน์อยู่แล้ว",minimum:"กรอกอย่างน้อยหนึ่งตัวเลือก",formErrors:"โปรดแก้ไขข้อผิดพลาดแล้วดำเนินการต่อ",fieldNameExists:"มีฟิลด์อื่นที่มีชื่อเดียวกันในแบบฟอร์มนี้ โปรดใช้ชื่ออื่น",deleteDropDownChoice:"การลบตัวเลือกจะส่งผลต่อบันทึกที่เกี่ยวข้องทั้งหมด"},maximumLimits:{filterable:"สามารถเลือกได้สูงสุด {{count}} ฟิลด์ (ไม่รวมฟิลด์ค้นหา) เพื่อคัดกรองบันทึกในมุมมองลิสต์",unique:"สามารถทำเครื่องหมายฟิลด์ว่าไม่ซ้ำกันได้สูงสุด {{count}} ฟิลด์",fields:"ถึงขีดจำกัดสูงสุด {{count}} ฟิลด์แล้ว ลบฟิลด์ที่มีอยู่เพื่อสร้างฟิลด์ใหม่",lookups:"ถึงขีดจำกัดสูงสุดของฟิลด์ค้นหา {{count}} ฟิลด์แล้ว ลบฟิลด์ค้นหาที่มีอยู่เพื่อสร้างฟิลด์ใหม่"}});var p=e("platformCouiWidgets",{viewAllWidgetRecords:"ดูบันทึกทั้งหมด",noRecordsLinked:"ไม่มีบันทึกที่ได้รับการเชื่อมโยง",linkWidgetButton:"เชื่อมโยงบันทึกใหม่",linkModalHeader:"เชื่อมโยงบันทึกใหม่",linkModalSelectSearchHeader:"ค้นหาตาม {{fieldName}}",linkModalSelectSearchPlaceholder:"ค้นหา...",linkModalSelectEmptySearch:"เริ่มพิมพ์...",linkModalSelectNoResultFound:"ไม่พบบันทึก",linkModalSubmitButton:"บันทึก",linkModalCancelButton:"ยกเลิก",linkModalSuccess:"อัปเดตบันทึกเรียบร้อยแล้ว",linkModalError:"อัปเดตบันทึกไม่สำเร็จ",checkBoxYesValue:"ใช่",checkBoxNoValue:"ไม่",widgetSectionHeader:"{{fieldLabel}} คือ {{contextLabel}}",linkModalLoadingText:"กำลังดึงรายละเอียด...",relatedWidgetAccordionHeader:"{{schema}} ที่เกี่ยวข้อง"});var u=e("filters",{addFilter:"+ เพิ่มเงื่อนไขอื่น",noFilter:"คุณยังไม่ได้เพิ่มตัวกรองใดๆ",validation:{required:"ต้องระบุค่า",minMax:"ต้องมากกว่า {{fromValue}}"},placeholder:{startRange:"ช่วงเริ่มต้น",endRange:"ช่วงสิ้นสุด",and:"และ"}});var m=e("searchDropdown",{placeholder:{search:"พิมพ์เพื่อค้นหา"}});var f=e("sortSelect",{ascending:"Ascending",descending:"Descending"});var h=e("default",{datepicker:a,dropdown:l,fileUploader:i,modal:o,search:t,form:r,pagination:n,datatable:d,platformTable:s,formBuilder:c,platformCouiWidgets:p,filters:u,export:{modalTitle:"ส่งออกบันทึก",exportFormat:"ส่งออกเป็น:",fields:"ฟิลด์",selectAllFields:"เลือกทุกฟิลด์",searchFieldsPrompt:"ค้นหาฟิลด์",selectedFields:"เลือกแล้ว {{count}} รายการ",submitButton:"ส่งออก",cancelButton:"ยกเลิก",noSearchResults:"ไม่พบผลลัพธ์",filterInfo:"การส่งออกประกอบด้วยบันทึกจำนวน {{filtered}} จาก {{total}} รายการตามเกณฑ์ตัวกรอง <a class='clearExportFilter'>ล้างตัวกรอง</a> เพื่อส่งออกบันทึกทั้งหมด"},searchDropdown:m,sortSelect:f})}}}));