var row=2;
var seats=["b2","a2","i2","h1","j1","d2","b1","d1","f1"]

var s1=["a","b","c"]
var s2=["d","e","f","g"]
var s3=["h","i","j"]

var temp1 =[];
var temp2 =[];

var booking=["a","b","c","d","e","f","g","h","i","j"]

function seatingArrangement(row,seats)
{
    var temp =[];
    var temp3 =[];
    var bookedSeats=[];
    let rowNum=0;
    let counter=0;
    seats.sort();

    for(var k=1;k<row+1;k++)
    {
    //filters each row
    var row1= seats.filter(s=>s.endsWith(k));
   
    if(row1.length!=0)
        {
            temp=[];
            var rows = row1.map(s=>s.substring(0,1));
            rowNum= row1[0].substring(1);
            for (var i in s2) {
                
                if(rows.indexOf(s2[i]) === -1)
                {
                    temp.push(s2[i]);
                }               
                }
                temp3=Array.from(new Set(temp)).sort()

                //if four seats are together - book
                if(temp3.length==4)
                {
                   counter=counter+1;
                   
                } 
                else
                {
                    temp1= returnSeats(rows,s1);
                    
                    temp1= returnSeats(rows,s2);
                    
                    temp1= returnSeats(rows,s3)    
                        
                    bookedSeats=Array.from(new Set(temp1));
                    
                }
                
        }
        else if(row1.length==0)
        {
            counter=counter+1;
        }
    if(bookedSeats.length>3)
    {
        counter=counter+1;
        bookedSeats.splice(4)
        
        }  
    bookedSeats=[];

    }
    if(counter===0)
    {
        console.log("Number of families that can be accomadated are:"+counter)
    }
    else if(counter>0)
    {
        console.log("Number of families that can be accomadated are:"+counter)
    }
   
}

//function to return seats in each row
function returnSeats(rows, row)
{
   
    for (var i in row)
    {
        if(rows.indexOf(row[i]) === -1)
            temp2.push(row[i]);
            
        }
        
        for(let i=0;i<temp2.length-1;i++)
        {
            
            if(temp2[i].charCodeAt(0)-temp2[i+1].charCodeAt()===-1)
            {
                
                temp1.push(temp2[i],temp2[i+1])
               
                if(temp1.length==2)
                {
                    break;
                }
            }
            
        }
        temp2=[];
        return temp1;
}

seatingArrangement(row,seats)