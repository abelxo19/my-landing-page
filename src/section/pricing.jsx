import { Check } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];
const pricing = () => {
  return (
  <section className="py-24">  
    <div className="container">
      <div className='max-w-[540px] mx-auto'>  
      <h1 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from black to-[#001E80] bg-clip-text">Pricing</h1>
      <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">from our free plan up to upgraded different with enhanced security and awesome features </p>
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-center lg:items-end gap-6 items-center mt-10'>
        {pricingTiers.map(({
          title,
          monthlyPrice ,
          buttonText,
          popular,
          inverse,
          features, 
        }) => (
       <div className= {twMerge('p-10 border max-w-xs w-full border-[#f1f1f1] rounded-3xl shadow-[0_7px_14px_#EAEAEA]',inverse === true && 'border-black bg-black text-white ')}>
         <div className='flex justify-between'>
          <h3 className={twMerge('text-lg font-bold text-black/50',inverse === true && 'text-white/60')}>{title}</h3>
         {
          popular && (
            <div className='inline-flex font-medium  text-sm px-4 py-1.5 rounded-xl border border-white/20'><span className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text'>Popular</span></div> 
          )
         }  
                 
         </div> 
          <div className='flex items-baseline gap-1 mt-[30px]'>
            <span className='text-4xl font-bold tracking-tighter leading-none'>${monthlyPrice}</span>
            <span className={twMerge('tracking-tight font-bold text-black/50',inverse === true && 'text-white/50')}>/month</span>
          </div>
          <button className={twMerge('btn btn-primary w-full mt-[30px]',inverse === true && 'bg-white text-black')}>{buttonText}</button>
          <ul className='flex flex-col gap-5 mt-8'>
            {features.map((feature) => (
              <li className='text-sm flex items-center gap-4'>
              <Check className='inline-flex'/>
              <span>{feature}</span>
              </li>
             ))
            }
          </ul>
        </div>
        ))}
      </div>
    </div>
    </section>  
  )
}

export default pricing
