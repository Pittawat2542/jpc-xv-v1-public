if(document.querySelector('[name="national_id"]')!=null){var national_id=new Cleave('[name="national_id"]',{numericOnly:!0,delimiters:['-','-','-','-'],blocks:[1,4,5,2,1]})}
if(document.querySelector('[name="phone_number"]')!=null){var phone_num=new Cleave('[name="phone_number"]',{numericOnly:!0,delimiters:['-','-','-'],blocks:[3,4,3]})}
if(document.querySelector('[name="parent_phone_number"]')!=null){var parent_num=new Cleave('[name="parent_phone_number"]',{numericOnly:!0,delimiters:['-','-','-'],blocks:[3,4,3]})}
if(document.querySelector('[name="gpa"]')!=null){var parent_num=new Cleave('[name="gpa"]',{numericOnly:!0,delimiters:['.'],blocks:[1,2]})}