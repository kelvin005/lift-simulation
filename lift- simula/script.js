

let uiContainer = document.querySelector(".container")
let btn = document.querySelector(".btn")
let numberOfFloors = document.querySelector(".floorInput")
let numberOfLift = document.querySelector(".liftinput")
let prev = 0;
let liftContainer= document.createElement("div")



btn.addEventListener("click", function(){
   let numOfLift = parseInt(numberOfLift.value)
   let  numOfFloor = parseInt(numberOfFloors.value)
   
   if (!numOfFloor  && !numOfLift ){
    alert(" please enter  a valid number to generate lift and floor imput boxes cant be empty ")
   }
   else if(!numOfFloor ){
       alert("enter a number of lift to generate floor")
   }
   else if(!numOfLift ){
      alert("enter a number to generate lift")
  }
   else{
      uiContainer.innerHTML = ""
      liftContainer.innerHTML=""
      for ( let i = numberOfFloors.value ; i > 0; i--)
      createLiftElements( i , numberOfLift.value)

      numberOfFloors.value = ""
      numberOfLift.value =""
   }

 
   
} )

   function createLiftElements( Floors, lifts ){
       
      let floorContainer = document.createElement("div") 
      floorContainer.classList.add("floorContainer")

      let Floor = document.createElement("div")
      Floor.classList.add("floor")




      let buttonContainer = document.createElement("div")
      buttonContainer.classList.add("button-div")
      let upButton = document .createElement("button")
      let downButton = document .createElement("button")
      
       upButton.classList.add("up-button")
       downButton.classList.add("down-button")

       Floor.dataset.floor = Floors

      //   upButton.setAttribute("id", "up-button")
      //   downButton.setAttribute("id", "down-button")

      // //  upButton.setAttribute("class", Floors)
      //  downButton.setAttribute("class", Floors)

       
       
       upButton.innerText = "up"
       downButton.innerText ="down"

       buttonContainer.append(upButton)
       buttonContainer.append(downButton)

       let floorName = document.createElement("p")

      

      
       floorName.classList.add("floorlabel")
       floorName.innerText = `floor ${Floors}`;
   
      buttonContainer.append( floorName)

       Floor.append(buttonContainer)
       floorContainer.append(Floor)
       uiContainer.append(floorContainer)


        

       for (let k = 0 ; k < lifts; k++) {
         if (Floors === 1) {
           let Lifts = document.createElement("div");
         
           Lifts.classList.add("lift-div");
         
           Lifts.setAttribute("onfloor", 1); 
           Lifts.dataset.currentLocation = 0;
       
        let leftDoor = document.createElement("div")
        leftDoor.classList.add("left-door")
         let rightDoor = document.createElement("div")
         leftDoor.classList.add("right-door")

        

        //  let doorsContainer = document.createElement("div")
        //  doorsContainer.classList.add("doorsContainer")

         Lifts.appendChild(leftDoor)
         Lifts.appendChild(rightDoor)

        //  Lifts.append(leftDoor)
        //  Lifts.append(rightDoor)

        // Lifts.append(doorsContainer)
         liftContainer.appendChild(Lifts);
         
           liftContainer.classList.add("lift");
         
           Floor.append(liftContainer);
         
           floorContainer.append(Floor);
         }
         }
       
   }

  