function declare(){
    var describeId1 = document.getElementById("describeId1");
    var describeId2 = document.getElementById("describeId2");
    var describeId3 = document.getElementById("describeId3");
    }
    
    var historyId = document.getElementById("historyId")
    var visioIid = document.getElementById("visionId")
    var goalId = document.getElementById("goalId")
    
    historyId.addEventListener('click',()=>{
      historyId.classList.add('active')
      declare();
      visionId.classList.remove("active")
      goalid.classList.remove("active")
      // console.log(description1)
      describeId1.style.display = "block";
      describeId2.style.display = "none";
      describeId3.style.display = "none";
    })
    visionId.addEventListener('click',()=>{
      visionId.classList.add('active')
      declare();
      historyId.classList.remove("active")
      goalid.classList.remove("active")
      describeId1.style.display = "none";
      describeId2.style.display = "block";
      describeId3.style.display = "none";
    })
    goalid.addEventListener('click',()=>{
      goalid.classList.add('active')
      declare();
      historyId.classList.remove("active")
      visionId.classList.remove("active")
      describeId2.style.display = "none";
      describeId1.style.display = "none";
      describeId3.style.display = "block";
    })