function kiemTraRong(str){
    str=str.trim();
    if(str!=''){
        return true;
    }else{
        return false;
    }
}
$(document).ready(function(){
    var flag=-1;
    $('#dn').click(function(){
        var flag=-1;
        if(kiemTraRong($('#username').val()) && kiemTraRong($('#pw').val()) ){
            var dsuser= JSON.parse(localStorage.getItem("DSuser"));
            var idtk=null;
            if(dsuser!=null){
                var username=$('#username').val();
                var pw=$('#pw').val();
                for(let i=0;i<dsuser.length;i++){
                    if(username==dsuser[i].name){
                        if(pw==dsuser[i].pw){
                            flag=1;
                            idtk=i;
                            break;
                        }else{
                            flag=2;
                            break;
                        }
                    }
                }
            }else{
                flag=0;
            }
            if(flag==0){
                alert('<< Tài khoản không tồn tại!!! >>');
            }else if(flag==1){
                localStorage.setItem('IDTK',JSON.stringify(idtk));
                let url='../html/home.html';
                window.location.href=url;
            }else if(flag==2) {
                alert('<< Bạn nhập sai mật khẩu >>');
            }
        }else{
            alert('<< Bạn cần phải nhập tài khoản và mật khẩu >>');
        }
    })
})
