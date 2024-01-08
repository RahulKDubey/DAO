import {useState,useEffect} from "react"
function InvestorList({state}){
   const [list,setList]=useState([]);
   useEffect(()=>{
      const {contract}=state;
      async function investorlist(){
         const list = await contract.methods.InvestorList().call();
         console.log(list)
         setList(list)
     }
     contract && investorlist()
   },[state])

   return<>
    <div className="list">
    <h3>Investor's List</h3>
      {list.map((investorAddress)=>{
          return <p key={investorAddress}>
          {investorAddress}
          </p>
      })}
      {/* {list} */}
    </div>
   </>
  }
  export default InvestorList;