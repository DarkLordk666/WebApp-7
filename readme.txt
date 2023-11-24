โปรแกรมที่ต้องใช้
1. Visual Studio Code
2. XAMPP
download XAMPP : https://www.apachefriends.org/download.html
3. Postman
download Postman :https://www.postman.com/downloads/

ขั้นตอนการเปิดโปรแกรม
1. เปิด xampp
2. รัน Module Apache และ MySQL กดที่ Actions
3. เมื่อ Module ทั้งสองรันจนเป็นสีเขียวแล้ว ให้กดที่ปุ่ม admin ที่ MySQL โปรแกรมจะขึ้นหน้า phpMyAdmin บน browser
เลือก mydb => user
4. เปิดโฟล์เดอร์  sec1_gr7_pj2_ID012_050_053_061 
5. เปิดโฟล์เดอร์ชื่อ sec1_gr7_ws_src
6. เมื่อเปิดโฟล์เดอร์เข้ามาเสร็จแล้ว ให้ไปที่ Terminal คลิก New Terminal 
7. เมื่อแท็บ Terminal ขึ้น พิมพ์ npm start เพื่อรัน port
8. เปิดโปรแกรม Postman
9. กดที่ Collection แล้วกด New เพื่อสร้างแท็บ register เลือก HTTP
10.  สลับจาก GET เป็น POST 
11. สร้างแท็บมาอีก 2 แท็บ เพื่อเก็บ login กับ authen
12. ไปที่แท็บแรกที่สร้าง คลิกที่ Body => raw
13. คัดลอก
{
    "fname": "Yahnnakorn", 
    "lname": "Chittira",
    "email": "poopup1389@gmail.com",
    "password": "13888999"
}
แล้ววางลงไป
14. คัดลอก localhost:8034/register แล้ววางลงตรงช่องที่ให้ใส่ url
15. คลิก Send ถ้าไม่มีอะไรผิดพลาด ข้างล่างจะขึ้นว่า "status": "ok"
16. ไปที่แท็บที่ 2 แล้วคัดลอก localhost:8034/login แล้ววางลงตรงช่องที่ให้ใส่ url
17. คัดลอก
{
    "email": "poopup1389@gmail.com",
    "password": "13888999"
}
แล้ววางลงไป
18. คลิก Send ถ้าไม่มีอะไรผิดพลาด ข้างล่างจะขึ้นว่า "status": "ok",
                                                                            "message": "login success",
                                                                             พร้อมกับ token ให้คัดลอก token ทั้งหมดมา
19. ไปที่แท็บที่ 3 คัดลอก localhost:8034/authen แล้ววางลงตรงช่องที่ให้ใส่ url
20. คลิกที่ Authorization แล้วเลือก Type Bearer Token พร้อมวาง token ที่คัดลอกมา
ตรงช่อง Token
21. กด send ถ้าไม่มีอะไรผิดพลาดจะขึ้น
{
    "status": "ok",
    "decoded": {
        "email": "poopup1389@gmail.com",
        "iat": xxxxxxxxxx,
        "exp": xxxxxxxxxx
    }
} 
22. เปิดตัว visual  ใหม่ผ่านแป้นพิมพ์บนวินโดว์ ห้ามเปิดผ่านตัว visual โดยตรงเพราะมันจะแทนที่การทำงานของโฟล์เดอร์ backend
23. ไปที่ File => Open Folder แล้วเลือกโฟล์เดอร์ sec1_gr7_src
23. เมื่อเปิดโปรแกรมเสร็จไปที่ Terminal => New Terminal แล้วพิมพ์ npm start
24. รอสักครู่ตัวเว็บจะเปิดอัตโนมัติบน browser
25. เมื่อเปิดเว็บแล้ว ท่านจะเห็นเว็บของพวกเรา โดยเว็บของพวกเราเป็นเว็บร้านขายเกม ท่านสามารถดูเกมแล้วเลือกเกม
ที่ท่านสนใจจากการค้นหาชื่อเกมหรือเลือกดูประเภทเกมใน Categories 
มีปุ่มอยู่สองปุ่ม ปุ่มหนึ่งเป็นรูปหัวใจหมายถึงเกมที่ท่านชอบแต่ยังไม่คิดจะซื้อตัวเกมของท่านจะอยู่ที่ My Library 
อีกปุ่มเป็นรูปกระเป๋าหมายถึงการสั่งซื้อเกมลงกระเป๋าตัวเกมของท่านจะอยู่ที่ My Bag ใน My Bag โปรแกรมจะคำนวณค่าสินค่า
ของท่านทั้งหมดให้ 

 


