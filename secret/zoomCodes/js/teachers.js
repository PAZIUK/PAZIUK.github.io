"use strict"
const TEACHERS = {
  //id 1
  "НЕДОСТУПНО": "",
  //id 2
  "Ілюк Катерина Валентинівна": "https://us05web.zoom.us/j/6589970070?pwd=Vlp3dTU3ayt5eTNtTGpYSkhOTGU5dz09",
  //id 3
  "Галяра Юрій Дмитрович": "https://us04web.zoom.us/j/3503532115?pwd=MWVXL1FRR3VtRHlxSjYrbFNKRGdjUT09",
  //id 4
  "Мартинюк Світлана Василівна": "https://us05web.zoom.us/j/3265057462?pwd=WEc4L1huMUZkU1JJdnVqU2JVa21XUT09",
  //id 5
  "Палагнюк Тетяна Іванівна": "https://us04web.zoom.us/j/5161188905?pwd=OFpHL1E3Zml3a3cxVlhzczhPYXhuUT09",
  //id 6
  "Агатій Тамара Василівна": "https://us04web.zoom.us/j/9054859091?pwd=a0pNakRjbzdlbHAzbE5tai9NczBEUT09",
  //id 7
  "Ткач Василь Васильович": "https://us05web.zoom.us/j/3673705968?pwd=cTZwZ3JpOGduNUQ2OGZuSE5SWGduZz09",
  //id 8
  "Малинник Василь Васильович": "https://us04web.zoom.us/j/8010710853?pwd=eGs1OGlXUUZSeVUwNjA2NG5nRVg1UT09",
  //id 9
  "Баланецький Віктор Петрович": "https://us04web.zoom.us/j/9282320929?pwd=SEcyNjNKWmFWVHNPV0dXL0sxdVB5Zz09",
  //id 10
  "Дарійчук Людмила Василівна": "https://us04web.zoom.us/j/2438672024?pwd=UDdURjhjRSttdnlJVHBVeWJxZml4Zz09",
  //id 11
  "Агатій Володимир Володимирович": "https://us05web.zoom.us/j/8895427841?pwd=TjVETTBFbFU2c2J4d1ZPdHVLcFU4dz09",
  //id 12
  "Масло Тетяна Олексіївна": "https://us04web.zoom.us/j/6902500564?pwd=QzJkalg5ZkFEY0luVkdVVFh6eUNWdz09",
  //id 13
  "Ганич Дмитро Васильович": "https://us05web.zoom.us/j/5344642693?pwd=SUdROFpCMHI2clU0ekNieXRBNmFTdz09",
  //id 14
  "Паньків Оксана Василівна": "https://zoom.us/j/4647730505?pwd=NEV2ckxoSlVlV3B6SVROYThBZmNoUT09",
  //id 15
  "Ткач Уляна Василівна": "https://zoom.us/j/3234675563?pwd=cjY5anQ0VFhick1Kcks2Q2c0WWMyQT09",
  //id 16
  "Ткач Ольга Іванівна": "https://us02web.zoom.us/j/2050752668?pwd=YWkrVEh2QSs1cjBJTTIwZmpzdHdkQT09",
  //id 17
  "Літовська Тетяна Олексіївна": "https://us04web.zoom.us/j/9383897000?pwd=M3BqK3U0WXFOTis3am8wVTV4R0xmUT09",
  //id 18
  "Савчук Василина Василівна": "https://us04web.zoom.us/j/2359560419?pwd=bVBoRFI3K25lYlBxVXl2b2JIREtWUT09",
  //id 19
  "Стрельнікова Марина Маноліївна": "https://us05web.zoom.us/j/2470796665?pwd=YnFBcEhtUlc0cXA3NXZwMTBDam5EZz09",
  //id 20
  "Король Галина Василівна": "https://us04web.zoom.us/j/5713849450?pwd=cHp0S0t0c2JxNVp4dlBGNFBod0hWQT09",
  //id 21
  "Пазюк Зоряна Михайлівна": "https://zoom.us/j/2952516060?pwd=ZWh6dlZsdm1pTFFMWWRheXorMkhoQT09",
  //id 22
  "Ралик Оксана Іванівна": "https://us04web.zoom.us/j/7764410678?pwd=Z2lBRjBBaCtMUFlpbzJjSUhaYytDZz09",
  //id 23
  "Михайлюк Світлана Володимирівна": "https://us04web.zoom.us/j/3596491642?pwd=dXpCbXdjME1nYzJWWEppcE5ZeFBCUT09",
  //id 24
  "Микитей Ольга Михайлівна": "https://us05web.zoom.us/j/9686277425?pwd=dGVVZE5FN0gyc1R5TkRVQyttRk0vUT09",
  //id 25
  "Лахман Віра Василівна": "https://zoom.us/j/8167580898?pwd=NDc2UDZUL1E5YVpsOXZMNlNVbldLdz09",
  //id 26
  "Цуркан Галина Іванівна": "https://us04web.zoom.us/j/5468798806?pwd=TGdzcHlFai9JYU1wc3lVTzZjRzZoQT09",
  //id 27
  "Дарвай Марія Іванівна": "https://us02web.zoom.us/j/4133326413?pwd=ZmF5UjNFQXMyU3NCWE81Y3YrQVRjUT09",
  //id 28
  "Гнідан Марія Василівна": "https://us05web.zoom.us/j/8033956122?pwd=bFdxVEVoMXU1cHlEUzdCQkFQSU94UT09І",
  //id 29
  "Шевага Галина Михайлівна": "https://us04web.zoom.us/j/7635973549?pwd=OHEwak13WEhQejhxRGt2K2UzeU1iZz09",
  //id 30
  "Пазюк Зоя Іванівна": "https://us04web.zoom.us/j/2955475300?pwd=NUY5VlpIWDVtR21IbTVac2gyV2lWUT09",
  //id 31
  "Котляр Світлана Михайлівна": "https://zoom.us/j/2588424173?pwd=enBQZC9jemNNMWovZnB0RktvR0kxZz09",
  //id 32
  "Женихай Оксана Дмитрівна": "https://us04web.zoom.us/j/2022138816?pwd=dkNycVNEdWhraDM1dEt2YmtGT0I3QT09",
  //id 33
  "Дідич Юлія Валеріївна": "https://us04web.zoom.us/j/3867689431?pwd=ZEZSQUVVTVc1OWdmY0NCUnU2OFVVQT09",
  //id 34
  "Косар Марічка Юріївна": "https://us05web.zoom.us/j/2011323898?pwd=TUxWY0xCNk1EWnU0QWxHQ3pOZzJuZz09",
  //id 35
  "Василевич Галина Миколаївна": "https://us05web.zoom.us/j/4401693860?pwd=R3N6RGZ3RkVTTlVTUXdHRGdNdkZOUT09",
  //id 36
  "Грицанюк Володимир Григорович": "https://us05web.zoom.us/j/4723765578?pwd=ZThFWU1TS2hSUTZIQ0Q4VldZNWtUdz09",
  //id 37
  "Зубик Ніна Миколаївна": "https://us04web.zoom.us/j/8651028608?pwd=U3lDTWpOK0Y2Nk85eWt6b0hLM2ZDUT09",
  //id 38
  "Остапович Ірина Миколаївна": "",
  //id 39
  "Прізвище Ім'я По-Батькові": "https://us05web.zoom.us/j/4791491048?pwd=dHlTdTcrSkRwK3VTRFNHVzJxWCtuUT09",
}

let lessonsBlocks = document.querySelectorAll(".btns .lesson");

for (let i = 0; i < lessonsBlocks.length; i++) {
  let startBtn = document.createElement("div");
  let lessonBtn = document.createElement("button");
  let lessonBtnText = document.createElement("div");
  let lessonBtnImg = document.createElement("img");
  let lessonNumber = document.createElement("div");

  startBtn.classList.add("btn");
  lessonBtn.classList.add("lessonBtn");
  lessonBtnText.classList.add("lessonBtnText");
  lessonNumber.classList.add("lessonNumber");
  lessonBtnText.innerHTML = setUnicode(lessonsBlocks[i].getAttribute("lessonName").toUpperCase())
  lessonBtnImg.classList.add("btnImg");
  lessonBtnImg.setAttribute("src", "https://img.icons8.com/android/48/000000/plus.png");

  let teachersBlock = document.createElement("div");
  teachersBlock.classList.add("teachers")
  let teachersIds = lessonsBlocks[i].getAttribute("teachers").split(",");
  for (let ind = 0; ind < teachersIds.length; ind++) {
    let ID = teachersIds[ind] - 1;
    let teacher = document.createElement("div");
    let info = document.createElement("div");
    let desc = document.createElement("div");
    let linkButton = document.createElement("button");
    let QRCodeButton = document.createElement("button");
    teacher.classList.add("teacher");
    info.classList.add("info");
    desc.classList.add("desc");

    linkButton.addEventListener("click", () => {
      if (ID != 0) {
        window.open(Object.values(TEACHERS)[ID]);
      }
    });
    linkButton.textContent = "Перейти в ZOOM";
    if (ID != 0) {
      QRCodeButton.classList.add("QRCode");
      QRCodeButton.addEventListener("click", () => {
        showQRCode(ID,Object.keys(TEACHERS)[ID]);
      });
      QRCodeButton.textContent = "Відкрити QR-Код";
    }
    if (Object.keys(TEACHERS)[ID].length >= 29) {
      let firstSpace = Object.keys(TEACHERS)[ID].split(" ");
      let newString = "";
      for (let index = 0; index < firstSpace.length; index++) {
        if (index == 0) {
          newString += firstSpace[index] + " <br class='mobile'/>"
        } else {
          newString += ` ${firstSpace[index]}`
        }
      }
      desc.innerHTML = newString;
    } else {
      desc.textContent = Object.keys(TEACHERS)[ID];
    }

    info.appendChild(desc);

    teacher.appendChild(info);
    teacher.appendChild(linkButton);

    let isPC = whatDevice(navigator.platform.toLowerCase());
    if (isPC == true) {
      if (ID != 0) {
        teacher.appendChild(QRCodeButton);
      }
    }

    teachersBlock.appendChild(teacher);
  }

  lessonBtn.appendChild(lessonBtnText);
  lessonBtn.appendChild(lessonNumber);
  startBtn.appendChild(lessonBtn);
  startBtn.appendChild(lessonBtnImg);

  lessonsBlocks[i].appendChild(startBtn);
  lessonsBlocks[i].appendChild(teachersBlock);
}
function showQRCode(id,name){
  id = id+1;
  document.body.style.overflow = "hidden";
  let imgLink;
  if (id<10) {
    imgLink = `../../QRCodes/1700${id}.png`
  } else {
    imgLink = `../../QRCodes/170${id}.png`
  }
  let mainBlock = document.createElement("div");
  let cross = document.createElement("div")
  let crossImg = document.createElement("img")
  let main = document.createElement("div")
  let teacherName = document.createElement("div")
  let code = document.createElement("div")
  let QRcode = document.createElement("img")


  mainBlock.classList.add("HTMLQRCodeBLock","active");
  cross.classList.add("cross")
  main.classList.add("main")
  teacherName.classList.add("teacherName")
  code.classList.add("code")
  crossImg.setAttribute("src", "https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png");
  QRcode.setAttribute("src",imgLink)

  teacherName.textContent = name;

  code.appendChild(QRcode)

  cross.appendChild(crossImg)
  main.appendChild(teacherName)
  main.appendChild(code)

  mainBlock.appendChild(cross)
  mainBlock.appendChild(main)

  document.body.appendChild(mainBlock)

  cross.addEventListener("click",function(){
    hideQRCode();
  })
  document.addEventListener('keydown', function (e) {
    if (e.key == "Escape"){
      hideQRCode();
    }
  })
}

function whatDevice(OS){
  OS = OS.toLowerCase().substr(0,3)
  if (OS == "mac"||OS == "win"){
    return true;
  } else {
    return false;
  }
}

function hideQRCode(){
  document.body.removeChild(document.querySelector(".HTMLQRCodeBLock"))
  document.body.style.overflow = "unset";
}

function setUnicode(str) {
  while(str.indexOf("И") >= 0){
    str = str.split("")
    str[str.indexOf("И")] = "&#1048;"
    str = str.join("")
  }
  return str
}