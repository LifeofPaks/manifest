import React from 'react'
import T1 from '../../assets/trusted/t1.png'
import T2 from '../../assets/trusted/t2.png'
import T3 from '../../assets/trusted/t3.png'
import T4 from '../../assets/trusted/t4.png'    
import T5 from '../../assets/trusted/t5.png'    
import T6 from '../../assets/trusted/t6.png'    

const Trusted = () => {
  return (
    <div className="max-w-[1400px] !mx-auto !py-12" id='services'>
      <h1 className="text-[#0B1533] text-center text-[24px] font-semibold leading-[40px] uppercase ">
        Trusted By
      </h1>

      <div className="flex items-center justify-center flex-wrap gap-12 !mt-8">
        <img className="w-[120px]" src={T1} alt="trusted image" />
        <img className="w-[120px]" src={T2} alt="trusted image" />
        <img className="w-[120px]" src={T3} alt="trusted image" />
        <img className="w-[120px]" src={T4} alt="trusted image" />
        <img className="w-[120px]" src={T5} alt="trusted image" />
        <img className="w-[120px]" src={T6} alt="trusted image" />
      </div>
    </div>
  );
}

export default Trusted