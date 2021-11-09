const getRollNo=()=>{
    setTimeout(()=>{
      console.log('hi');  
      let roll_no=[1,2,3,4,5];
      console.log(roll_no);
      setTimeout((rollno)=>{
        const bio={
          name:'muskan',
          age:18};
          console.log(bio.name,bio.age);
      },2000,roll_no[1]);
    },2000);
}
getRollNo();
//callback hell first example 

const fav=()=>{
    setTimeout(()=>{
        console.log("hello i am muskan valmiki");
        array=['apple','banana','pear','guava'];
        console.log(array);
        setTimeout((rollno)=>{
            const dic={
                fruits1:'apple',fruits2:'banana',fruits3:'pear',fruits4:'guava'
            }
            console.log(dic.fruits1);
        },2000,array[1]);
    },2000);
}
fav();
//callback hell second example