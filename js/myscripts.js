
/*
    //���� 62. ����� ��� ���� ���� ���������
    
    $('#div_for_img > img') //����� �������� img � �����. ������ ������ �������! img, ��������� � ������ ����� ������� �� �����
    
    $('main_h1 + p')        //����� ���� p, ���������� �� ����� main_h1. ����� ����������� �����
    
    $('#div_for_img img')   //����� ���� ��������� ��������� � ����� img � ����� � ��������������� div_for_img
    
    
    //���� 61. ����� ���������. ����� ������� ������ jquery();
    
    jquery();   //��� ��� �� �������� �������, ������� �������� ������, ���������� �������� ��� ��� � �������� �������
    $();        //$(); - ������������ jquery();
    //jquery �� �������� ������ ����� ����� �� css. � ��� ������!
    
    $('p'); // jquery-�����/�������. ��� �������� � �����
    $('#main_h1');  //������� � ���������������
    $('.maindiv');  //�������� ������
    
    
    //���� 60. ����������� �����, ����������� HTM-��� � �������� ��� ��.
    
    var mainHeader=document.getElementById("main_h1");
    alert(mainHeader.textContent);    //����������� ���������� �����. ����� ����� ������������ �������� .innerText
    
    var myDiv=document.getElementById('div_for_img');   //����������� HTML-��� ��������
    alert(myDiv.innerHTML);
    
    myDiv.innerHTML="<p><strong> ������� ��������� innerHTML</strong></p>"; //�������� HTML-��� ��������
*/