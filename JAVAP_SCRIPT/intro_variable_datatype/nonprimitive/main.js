let fruits = ["apple","orange","kiwi","banana","papaya"]

        for(let i=1 ; i <= fruits.length ; i++){
                    console.log(i ,fruits)
        }


        let table = [1,2,3,4,5,6,7,8,9,10]
        for(let i=1 ; i<= table.length; i++){
            let num = 3;
            console.log(i ,"*" ,num ,"=", num*i)
        }
         
      
        for(let star=1; star<=5;star++){
            let row = " "
            for(let stars=1 ; stars<=star; stars++){
                row += "*"
            }
            console.log(row)
        }

        for(let i=1;i<=5;i++){
            let row=" "
            for(let j=1;j<=i;j++){
                row += 1
                for(let k=1;k<=j;k++){
                    row += 1
                }
            }
            console.log(row)
        }