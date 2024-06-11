/* Calculations:
  Taking 10 Different Lrs, outs and arts
  Average Document(lr, art or out) words count: 616
  Each 750 words = 1000 tokens --> 616 = 822 token per Use
  Each 1M token = 5$ --> 0.004$ per try, 
  n try per day --> 30*n*0.004$ = 0.12n
  eg. free tier: 3 tries a day --> 3.6$ per user/month
  360$ per 1000 users, and so on
*/
const Tries = {
  FreeTier:{
    out:15,
    art:15,
    lr:15,
    plg:0,
    ref:0,
    pdf_downloads:0,
    clr:0,
    crl:0
  },
  Basic:{
    out:50,
    art:15,
    lr:15,
    plg:0,
    ref:0,
    pdf_downloads:0,
    clr:0,
    crl:0
  },
  Pro:{
    out:50,
    art:15,
    lr:15,
    plg:0,
    ref:0,
    pdf_downloads:0,
    clr:0,
    crl:0
  },
}
export const plans = [
  { id: 0, name: "Free Tier", price: "$0/month", features: ['Access the Interactive Editor','Unlimited Searches in search engines',`Literature review (${Tries.FreeTier.lr} tries/day)`,`Articles Outline ( ${Tries.FreeTier.out} tries/day)`,`Articles Generation (${Tries.FreeTier.art} tries/day)`],not_av:['No Plagiarism Check','No Custom Literature review','No Custom References List','No Spelling Correction','No Rephrase or autocomplete in Editor','You Can not download your researches as PDF'] },
  { id: 1, name: "Basic Plan", price: "$25/month",note:"Includes Free Tier's Features, but in addition to:", features: [`Literature Reviews (Up to ${Tries.Basic.lr} tries/day)`,`Outlines (Up to ${Tries.Basic.out} tries/day)`,`Articles (${Tries.Basic.art} tries/day)`,`Plagiarism ckeck analysis for your Writtings (${Tries.Basic.plg} tries/day)`,`Custom Literature (${Tries.Basic.clr} tries/day)`,`Custom References( ${Tries.Basic.crl} try/day)`,`You can download ${Tries.Basic.pdf_downloads}/day`],not_av:['No Auto Complete','No Rephrase'] },
  { id: 2, name: "Pro Plan", price: "$35/month",note:"Includes Basic Plan Features, but in addition to:", features: [`Literature Reviews (Up to ${Tries.Pro.lr} tries/day)`,`Outlines (Up to ${Tries.Pro.out} tries/day)`,`Articles (${Tries.Pro.art} tries/day)`,`Plagiarism ckeck analysis for your Writtings (${Tries.Pro.plg} tries/day)`,`Custom Literature (${Tries.Pro.clr} tries/day)`,`Custom References( ${Tries.Pro.crl} try/day)`,`You can download ${Tries.Pro.pdf_downloads}/day`,'AI-based Auto Complete','AI-based Rephrase'],not_av:[] },

];