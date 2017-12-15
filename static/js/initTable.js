/*
初始化表格

 */
$(function(){
  initPrizesTable();
});
  //奖项列表
function initPrizesTable(){
    $('#prizes_table').bootstrapTable({
        height: getHeight(),
        columns:[
        {
          field:'',
          checkbox:true,
          align:'center',
          valign:'middle'
        },
        {
          field:'name',
          title:'奖项名称',
          align:'center',
          valign:'middle'
        },
        {
          field:'size',
          title:'奖品',
          align:'center',
          valign:'middle'
        },
        {
          field:'total',
          align:'center',
          valign:'middle',
          title:'总名额',
        },
        {
          field:'left',
          align:'center',
          valign:'middle',
          title:'剩余名额'
        },
        {
          field:'onlyUnlucky',
          align:'center',
          valign:'middle',
          title:'抽奖规则',
          formatter:'remark'
        }
    ],
});
$("#prizes_table").bootstrapTable("load", getAllPrize());
}

//初始化员工信息表格
function initUserTable(){
   $('#user_table').bootstrapTable({
         height: getHeight(),
         columns:[
          
           {
             field:'code',
             title:'工号',
             align:'center',
             valign:'middle'
           },
           {
             field:'name',
             title:'姓名',
             align:'center',
             valign:'middle'
           },
           {
             field:'department',
             align:'center',
             valign:'middle',
             title:'部门',
           }
       ],
   });
$("#user_table").bootstrapTable("load",getEmployeeTableData());
}
//初始化榜单表格
function initRecordeTable(){
   $('#result_table').bootstrapTable({
         height: getHeight(),
         columns:[
           {
            field:'check',
            checkbox:true,
            align:'center',
            valign:'middle'
           },
           {
             field:'index',
             title:'序号',
             align:'center',
             valign:'middle'
           },
           {
             field:'eCode',
             title:'工号',
             align:'center',
             valign:'middle'
           },
           {
             field:'eName',
             align:'center',
             valign:'middle',
             title:'姓名',
           },
           {
             field:'eDept',
             align:'center',
             valign:'middle',
             title:'部门',
           },
           {
             field:'pName',
             align:'center',
             valign:'middle',
             title:'奖项名称',
           },
           {
             field:'size',
             align:'center',
             valign:'middle',
             title:'奖品',
             formatter:'prizes',
               visible:false
           },
           {
             field:'EsingName',
             align:'center',
             valign:'middle',
             title:'领奖员工签名',
             visible:false,
             formatter:'singName'
           }
       ]
   });
$("#result_table").bootstrapTable("load",getLuckyRecords());
}
// 初始化数据备份表格
function initBackupTable(){
   $('#backup_table').bootstrapTable({
         height: getHeight(),
         columns:[
           {
             field:'backupContent',
             title:'备份内容',
             align:'center',
             valign:'middle'
           },
           {
             field:'backupData',
             title:'备份时间',
             align:'center',
             valign:'middle'
           },
           {
             field:'backupSatus',
             align:'center',
             valign:'middle',
             title:'备份状态',
           }
       ]
   });
$("#backup_table").bootstrapTable("load",getdateEmpty());
}
/*
调整窗口高度  表格高度随着变化

 */
$(window).resize(function () {
    $('#prizes_table').bootstrapTable('resetView', {
        height: getHeight()
    });
    $('#user_table').bootstrapTable('resetView', {
        height: getHeight()
    });
    $('#backup_table').bootstrapTable('resetView', {
        height: getHeight()
    });
    $('#result_table').bootstrapTable('resetView', {
        height: getHeight()
    });
});


/*
200毫秒之后重新调整高度
 */
setTimeout(function () {
    $("#prizes_table").bootstrapTable('resetView');
    $("#user_table").bootstrapTable('resetView');
    $("#backup_table").bootstrapTable('resetView');
    $("#result_table").bootstrapTable('resetView');
}, 200);


/*
获取表格的高度
 */
function getHeight() {
    return $(window).height() - $('.top-btn-section').outerHeight(true)-$('.top-nav').outerHeight(true)-54;
}
var selections = [];
function responseHandler(res) {
    $.each(res.rows, function (i, row) {
        row.state = $.inArray(row.id, selections) !== -1;
    });
    return res;
}