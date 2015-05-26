var validator = $($formName).validate({
	rules:
    { 
		syrq:{required:true},
		gtjkrxm:{required:true},
		gtjkrhm:{required:true},
		bzdbxm:{required:true},
		bzdbhm:{required:true},
		dyr:{required:true},
		dywmc:{required:true},
		sl:{required:true},
		djhm:{required:true},
		kdyjz:{required:true}
     },
messages:
    {
	syrq:{required:"审议日期不能为空"},
	gtjkrxm:{required:"姓名不能为空"},
	gtjkrhm:{required:"证件号码不能为空"},
	bzdbxm:{required:"姓名不能为空"},
	bzdbhm:{required:"证件号码不能为空"},
	dyr:{required:"抵押人不能为空"},
	dywmc:{required:"抵押物名称不能为空"},
	sl:{required:"数量不能为空"},
	djhm:{required:"权证或单据号码不能为空"},
	kdyjz:{required:"可抵押价值不能为空"}
   },
	errorPlacement : function(error, element) {
		element.after(error);
		if(layout){
			layout.resizeLayout();
		}
	}
});