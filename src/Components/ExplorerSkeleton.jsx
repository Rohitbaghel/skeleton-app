import React from 'react'

export const ExplorerSkeleton = () => {
  return (
      <div className='bg-black'>
          <nav className='mx-4 '>
              <div className="flex justify-between py-4">
                  <div className="w-[149px] text-base text-[#279678] font-bold my-auto">VOLARES</div>
                  <div className="flex gap-4 text-white my-auto">
                      <p className="">Trending</p>
                      <p className="">Top Sellers</p>
                      <p className="">Hot Bids</p>
                      <p className="">Live Auctions</p>
                      <p className="">Explore</p>
                  </div>
                  <div className="flex gap-4">
                      <div className="text-white my-auto">En </div>
                      <div className="border-2 rounded-xl border-[#2DC79D] p-1 text-[#2DC79D]">Created NFT</div>
                      <div className="border-2 rounded-xl border-[#2DC79D] p-1 bg-[#2DC79D] font-bold">Connect Wallet</div>
                      <div className="w-9 h-9 rounded-full bg-[#FFFFFF1F] ">

                      </div>
                  </div>
                  
              </div>
              
          </nav>
          <div className="my-10 mx-24">
              <p className="font-[Noto Sans KR] font-bold text-[26px] text-white text-left">EXPLORE COLLECTIONS</p>
              <p className="text-left text-white">10238 results</p>
          <div className="flex gap-10">
              {/* left-side */}
              <div className="">
                  <p className="text-lg font-[
Noto Sans KR] font-bold my-8 text-white text-left">Filter By</p>
                  {/* price Range */}
                      <div className="w-[250px] h-[190px] rounded-lg bg-[#464646] my-4">
                          <div className="mx-4 text-left">
                              <p className="py-4 text-[#F2F2F2] font-bold text-[18px] font-[Noto Sans KR] ">Price Range</p>
                              <div className="my-4 flex ">
                                  <div className="w-[50px] h-[7px] rounded-lg bg-[#414B5D] my-auto"></div>
                                  <div className="w-[28px] h-[28px] rounded-full bg-[#00FF8B]">
                                  <div className="w-[12px] h-[12px]  bg-[#101316]  mx-auto mt-2"></div>
                                  </div>
                                  <div className="w-[50px] h-[7px] rounded-lg bg-[#414B5D] my-auto"></div>
                                  <div className="w-[28px] h-[28px] rounded-full bg-[#00FF8B]">
                                  <div className="w-[12px] h-[12px]  bg-[#101316]  mx-auto mt-2"></div>
                                  </div>
                                  <div className="w-[50px] h-[7px] rounded-lg bg-[#414B5D] my-auto"></div>
                              </div>
                              <p className="py-4 text-[#F2F2F2] font-normal text-[14px] font-[Noto Sans KR]">$ 100 USD - 200 USD</p>
                          </div>
                       
                  </div>
                      {/* ---------------- */}
                      
                      {/* category */}
                      <div className="w-[250px] h-[417px] rounded-lg bg-[#464646] my-4 text-left">
                          <div className="mx-4 text-left">
                      <p className="py-4 text-[#F2F2F2] font-bold text-[18px] font-[Noto Sans KR] ">Category</p>
                          </div>
                              
                          </div>
                      {/* ---------------- */}
                      
                      {/* Blockchain */}
                      <div className="w-[250px] h-[163px] rounded-lg bg-[#464646] my-4">
                          
                          </div>

                      {/* ---------------- */}
                      
                      {/* sale type */}
                      <div className="w-[250px] h-[163px] rounded-lg bg-[#464646] my-4">
                          
                          </div>
                      {/* ---------------- */}
                  
              </div>
                  {/* ---------------- */}
                  
                  {/* Right side */}
                  <div className="my-4">
                      {/* input and button */}
                      <div className="flex ">
                          <input type="text" className="w-[400px] h-12 rounded-lg bg-[#464646] " placeholder='Search by collection / address' />
                          <div className="border-2 rounded-xl border-[#2DC79D] p-1.5 bg-[#2DC79D] font-bold w-[120px] h-12 text-center mx-2">Search</div>
                      </div>
                      {/* ---------------- */}
                      {/* <div className="text-white justify-end border-2">Sort By</div> */}
                      
                      <div className="grid grid-cols-3 gap-4 my-7">
                      <div className="bg-[#26282B] w-[250px] h-[395px] rounded-md">
                      <div className="">
                          <div className=" h-60"></div>
                          <div className=" mx-2">
                              <div className="bg-[#3B3F4442] w-[47px] h-[10.5px] my-4"></div>
                              
                              <div className="bg-[#3B3F4442] w-full h-[10.5px] my-4"></div>

                              <div className="flex justify-between my-8">
                                  <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                              </div>   

                              
                              <div className="flex">
                                  <div className="bg-[#3B3F4442] w-[18px] h-[18px] rounded-full "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[80px] h-[10.5px] my-auto mx-6"></div>
                              </div>   
                            
                              

                          </div>
                          
                      </div>
                          </div>
                          
                          <div className="bg-[#26282B] w-[250px] h-[395px] rounded-md">
                      <div className="">
                          <div className=" h-60"></div>
                          <div className=" mx-2">
                              <div className="bg-[#3B3F4442] w-[47px] h-[10.5px] my-4"></div>
                              
                              <div className="bg-[#3B3F4442] w-full h-[10.5px] my-4"></div>

                              <div className="flex justify-between my-8">
                                  <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                              </div>   

                              
                              <div className="flex">
                                  <div className="bg-[#3B3F4442] w-[18px] h-[18px] rounded-full "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[80px] h-[10.5px] my-auto mx-6"></div>
                              </div>   
                            
                              

                          </div>
                          
                      </div>
                          </div>
                          
                          <div className="bg-[#26282B] w-[250px] h-[395px] rounded-md">
                      <div className="">
                          <div className=" h-60"></div>
                          <div className=" mx-2">
                              <div className="bg-[#3B3F4442] w-[47px] h-[10.5px] my-4"></div>
                              
                              <div className="bg-[#3B3F4442] w-full h-[10.5px] my-4"></div>

                              <div className="flex justify-between my-8">
                                  <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                              </div>   

                              
                              <div className="flex">
                                  <div className="bg-[#3B3F4442] w-[18px] h-[18px] rounded-full "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[80px] h-[10.5px] my-auto mx-6"></div>
                              </div>   
                            
                              

                          </div>
                          
                      </div>
                          </div>
                          
                          <div className="bg-[#26282B] w-[250px] h-[395px] rounded-md">
                      <div className="">
                          <div className=" h-60"></div>
                          <div className=" mx-2">
                              <div className="bg-[#3B3F4442] w-[47px] h-[10.5px] my-4"></div>
                              
                              <div className="bg-[#3B3F4442] w-full h-[10.5px] my-4"></div>

                              <div className="flex justify-between my-8">
                                  <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                              </div>   

                              
                              <div className="flex">
                                  <div className="bg-[#3B3F4442] w-[18px] h-[18px] rounded-full "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[80px] h-[10.5px] my-auto mx-6"></div>
                              </div>   
                            
                              

                          </div>
                          
                      </div>
                          </div>
                          
                          <div className="bg-[#26282B] w-[250px] h-[395px] rounded-md">
                      <div className="">
                          <div className=" h-60"></div>
                          <div className=" mx-2">
                              <div className="bg-[#3B3F4442] w-[47px] h-[10.5px] my-4"></div>
                              
                              <div className="bg-[#3B3F4442] w-full h-[10.5px] my-4"></div>

                              <div className="flex justify-between my-8">
                                  <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                              </div>   

                              
                              <div className="flex">
                                  <div className="bg-[#3B3F4442] w-[18px] h-[18px] rounded-full "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[80px] h-[10.5px] my-auto mx-6"></div>
                              </div>   
                            
                              

                          </div>
                          
                      </div>
                          </div>
                          
                          <div className="bg-[#26282B] w-[250px] h-[395px] rounded-md">
                      <div className="">
                          <div className=" h-60"></div>
                          <div className=" mx-2">
                              <div className="bg-[#3B3F4442] w-[47px] h-[10.5px] my-4"></div>
                              
                              <div className="bg-[#3B3F4442] w-full h-[10.5px] my-4"></div>

                              <div className="flex justify-between my-8">
                                  <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                              </div>   

                              
                              <div className="flex">
                                  <div className="bg-[#3B3F4442] w-[18px] h-[18px] rounded-full "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[80px] h-[10.5px] my-auto mx-6"></div>
                              </div>   
                            
                              

                          </div>
                          
                      </div>
                          </div>
                          
                          <div className="bg-[#26282B] w-[250px] h-[395px] rounded-md">
                      <div className="">
                          <div className=" h-60"></div>
                          <div className=" mx-2">
                              <div className="bg-[#3B3F4442] w-[47px] h-[10.5px] my-4"></div>
                              
                              <div className="bg-[#3B3F4442] w-full h-[10.5px] my-4"></div>

                              <div className="flex justify-between my-8">
                                  <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                              </div>   

                              
                              <div className="flex">
                                  <div className="bg-[#3B3F4442] w-[18px] h-[18px] rounded-full "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[80px] h-[10.5px] my-auto mx-6"></div>
                              </div>   
                            
                              

                          </div>
                          
                      </div>
                          </div>
                          
                          <div className="bg-[#26282B] w-[250px] h-[395px] rounded-md">
                      <div className="">
                          <div className=" h-60"></div>
                          <div className=" mx-2">
                              <div className="bg-[#3B3F4442] w-[47px] h-[10.5px] my-4"></div>
                              
                              <div className="bg-[#3B3F4442] w-full h-[10.5px] my-4"></div>

                              <div className="flex justify-between my-8">
                                  <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                              </div>   

                              
                              <div className="flex">
                                  <div className="bg-[#3B3F4442] w-[18px] h-[18px] rounded-full "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[80px] h-[10.5px] my-auto mx-6"></div>
                              </div>   
                            
                              

                          </div>
                          
                      </div>
                          </div>
                          
                          <div className="bg-[#26282B] w-[250px] h-[395px] rounded-md">
                      <div className="">
                          <div className=" h-60"></div>
                          <div className=" mx-2">
                              <div className="bg-[#3B3F4442] w-[47px] h-[10.5px] my-4"></div>
                              
                              <div className="bg-[#3B3F4442] w-full h-[10.5px] my-4"></div>

                              <div className="flex justify-between my-8">
                                  <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[65px] h-[10.5px] "></div>
                              </div>   

                              
                              <div className="flex">
                                  <div className="bg-[#3B3F4442] w-[18px] h-[18px] rounded-full "></div>
                                  
                              <div className="bg-[#3B3F4442] w-[80px] h-[10.5px] my-auto mx-6"></div>
                              </div>   
                            
                              

                          </div>
                          
                      </div>
                          </div>
                          

                  </div>
                      
                  </div>

                  {/* ---------------- */}
              </div>
              
          </div>

          {/* Footer */}
          <footer className='mx-48 '>
              <div className="flex justify-between border-b-2 my-8">
                  <div className="">
                      <div className=" text-white w-[452px] h-[69px]  py-3 text-[14px] font-normal">Valores is an NFT marketplace  where we value what you value - what you celebrate, what you create, and on what you collaborate. </div>
                  
                  </div>

                  {/* social media  */}
                  <div className="grid grid-cols-5 gap-10 my-auto">
                      <div className="bg-[#3B3F44] w-[36px] h-[36px] rounded-full "><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 0C12.3817 0 11.8051 0.02125 9.99175 0.102C8.18125 0.187 6.94875 0.47175 5.865 0.8925C4.74725 1.326 3.79808 1.90825 2.85317 2.85317C1.90825 3.79808 1.32458 4.74583 0.8925 5.865C0.47175 6.94875 0.185583 8.18125 0.102 9.99175C0.017 11.8051 0 12.3817 0 17C0 21.6183 0.02125 22.1949 0.102 24.0082C0.187 25.8173 0.47175 27.0513 0.8925 28.135C1.326 29.2513 1.90825 30.2019 2.85317 31.1468C3.79808 32.0903 4.74583 32.6754 5.865 33.1075C6.95017 33.5268 8.18267 33.8144 9.99175 33.898C11.8051 33.983 12.3817 34 17 34C21.6183 34 22.1949 33.9787 24.0082 33.898C25.8173 33.813 27.0513 33.5268 28.135 33.1075C29.2513 32.674 30.2019 32.0903 31.1468 31.1468C32.0903 30.2019 32.6754 29.2556 33.1075 28.135C33.5268 27.0513 33.8144 25.8173 33.898 24.0082C33.983 22.1949 34 21.6183 34 17C34 12.3817 33.9787 11.8051 33.898 9.99175C33.813 8.18267 33.5268 6.94733 33.1075 5.865C32.674 4.74725 32.0903 3.79808 31.1468 2.85317C30.2019 1.90825 29.2556 1.32458 28.135 0.8925C27.0513 0.47175 25.8173 0.185583 24.0082 0.102C22.1949 0.017 21.6183 0 17 0ZM17 3.06C21.5376 3.06 22.0788 3.08267 23.8708 3.16058C25.5283 3.2385 26.4279 3.51333 27.0257 3.7485C27.8219 4.05592 28.3857 4.42425 28.9836 5.01783C29.5772 5.61283 29.9455 6.17808 30.2529 6.97425C30.4852 7.57208 30.7629 8.47167 30.838 10.1292C30.9187 11.9227 30.9372 12.461 30.9372 17C30.9372 21.539 30.9159 22.0788 30.8323 23.8708C30.7459 25.5283 30.4697 26.4279 30.2359 27.0257C29.9186 27.8219 29.5573 28.3857 28.9623 28.9836C28.3687 29.5772 27.795 29.9455 27.0073 30.2529C26.4123 30.4852 25.4986 30.7629 23.8411 30.838C22.0362 30.9187 21.505 30.9372 16.9575 30.9372C12.4086 30.9372 11.8773 30.9159 10.0739 30.8323C8.415 30.7459 7.50125 30.4697 6.90625 30.2359C6.10017 29.9186 5.54625 29.5573 4.95267 28.9623C4.35625 28.3687 3.97517 27.795 3.67767 27.0073C3.44392 26.4123 3.16908 25.4986 3.08267 23.8411C3.01892 22.0561 2.99625 21.505 2.99625 16.9787C2.99625 12.4511 3.01892 11.8986 3.08267 10.0923C3.16908 8.43483 3.44392 7.5225 3.67767 6.9275C3.97517 6.12 4.35625 5.5675 4.95267 4.97108C5.54625 4.3775 6.10017 3.995 6.90625 3.69892C7.50125 3.46375 8.39517 3.1875 10.0527 3.1025C11.8589 3.03875 12.3902 3.0175 16.9362 3.0175L17 3.06ZM17 8.2705C12.1762 8.2705 8.2705 12.1805 8.2705 17C8.2705 21.8237 12.1805 25.7295 17 25.7295C21.8237 25.7295 25.7295 21.8195 25.7295 17C25.7295 12.1762 21.8195 8.2705 17 8.2705ZM17 22.6667C13.8692 22.6667 11.3333 20.1308 11.3333 17C11.3333 13.8692 13.8692 11.3333 17 11.3333C20.1308 11.3333 22.6667 13.8692 22.6667 17C22.6667 20.1308 20.1308 22.6667 17 22.6667ZM28.1152 7.92625C28.1152 9.0525 27.2 9.96625 26.0752 9.96625C24.9489 9.96625 24.0352 9.05108 24.0352 7.92625C24.0352 6.80142 24.9503 5.88767 26.0752 5.88767C27.1986 5.88625 28.1152 6.80142 28.1152 7.92625Z" fill="#B1B1B1"/>
</svg>
                      </div>
                      
                      <div className="">
                      <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.7824 2.1908C26.5781 1.17896 24.2519 0.457425 21.8619 0.0442612C21.8402 0.0402109 21.8177 0.0431103 21.7978 0.0525465C21.7778 0.0619826 21.7613 0.0774751 21.7507 0.0968197C21.4517 0.628495 21.1207 1.32195 20.8889 1.86695C18.2756 1.47566 15.6756 1.47566 13.1159 1.86695C12.8842 1.30977 12.541 0.628495 12.2409 0.0968197C12.2297 0.0779159 12.2132 0.0628025 12.1933 0.053452C12.1735 0.0441015 12.1513 0.0409482 12.1296 0.0444031C9.73942 0.456606 7.41299 1.17808 5.20895 2.19065C5.19009 2.19871 5.1742 2.21242 5.16347 2.22989C0.755656 8.81513 -0.451911 15.2384 0.140539 21.5821C0.142214 21.5977 0.146989 21.6127 0.154582 21.6264C0.162174 21.64 0.172429 21.652 0.184739 21.6616C3.09287 23.7974 5.90991 25.0939 8.67468 25.9533C8.69618 25.9597 8.71912 25.9594 8.74044 25.9524C8.76176 25.9454 8.78044 25.9321 8.79397 25.9142C9.4479 25.0211 10.0309 24.0793 10.5308 23.089C10.5377 23.0755 10.5416 23.0606 10.5423 23.0454C10.543 23.0303 10.5405 23.0151 10.5349 23.0009C10.5294 22.9868 10.5209 22.974 10.51 22.9634C10.4991 22.9527 10.4861 22.9445 10.4719 22.9393C9.54706 22.5885 8.66661 22.1608 7.81958 21.6752C7.80414 21.6661 7.79116 21.6534 7.7818 21.6381C7.77245 21.6229 7.767 21.6055 7.76593 21.5876C7.76487 21.5697 7.76822 21.5519 7.7757 21.5356C7.78318 21.5193 7.79455 21.5051 7.80882 21.4943C7.98703 21.3607 8.16539 21.2219 8.33553 21.0815C8.35065 21.069 8.36896 21.061 8.38838 21.0584C8.4078 21.0558 8.42757 21.0586 8.44547 21.0666C14.0098 23.6071 20.0338 23.6071 25.5324 21.0666C25.5504 21.0581 25.5703 21.0548 25.59 21.0572C25.6097 21.0596 25.6283 21.0675 25.6437 21.0801C25.8139 21.2203 25.9922 21.3607 26.1718 21.4943C26.1861 21.505 26.1975 21.5191 26.2051 21.5353C26.2127 21.5515 26.2162 21.5693 26.2152 21.5872C26.2143 21.605 26.209 21.6224 26.1998 21.6377C26.1906 21.653 26.1778 21.6659 26.1624 21.6751C25.3151 22.17 24.4275 22.5924 23.509 22.9379C23.4948 22.9433 23.4818 22.9517 23.471 22.9625C23.4602 22.9733 23.4518 22.9863 23.4464 23.0006C23.441 23.0148 23.4386 23.0301 23.4394 23.0453C23.4403 23.0606 23.4444 23.0755 23.4514 23.089C23.9619 24.0779 24.5449 25.0197 25.1868 25.9127C25.1999 25.9312 25.2185 25.945 25.2399 25.9523C25.2613 25.9595 25.2844 25.9599 25.3061 25.9533C28.0842 25.0938 30.9012 23.7972 33.8093 21.6616C33.8218 21.6525 33.8323 21.6408 33.8399 21.6273C33.8476 21.6138 33.8523 21.5988 33.8537 21.5834C34.5626 14.2493 32.6662 7.87871 28.8266 2.23117C28.8172 2.21282 28.8015 2.19845 28.7824 2.19065V2.1908ZM11.3617 17.7194C9.68647 17.7194 8.30606 16.1814 8.30606 14.2925C8.30606 12.4038 9.65969 10.8658 11.3618 10.8658C13.0771 10.8658 14.4441 12.4173 14.4173 14.2927C14.4173 16.1814 13.0637 17.7194 11.3617 17.7194ZM22.6593 17.7194C20.9841 17.7194 19.6037 16.1814 19.6037 14.2925C19.6037 12.4038 20.9572 10.8658 22.6593 10.8658C24.3746 10.8658 25.7416 12.4173 25.7148 14.2927C25.7148 16.1814 24.3746 17.7194 22.6593 17.7194Z" fill="#B1B1B1"/>
</svg>

                      </div>
                      <div className=" w-[36px] h-[36px] rounded-full">
                      <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.9334 3.47449C32.6605 4.03493 31.312 4.40487 29.9313 4.57241C31.385 3.69868 32.4734 2.32847 32.9956 0.714827C31.6483 1.50108 30.1552 2.07341 28.5657 2.39216C27.517 1.27077 26.1274 0.527007 24.6127 0.276371C23.0979 0.0257342 21.5428 0.282248 20.1888 1.00608C18.8348 1.72991 17.7577 2.88056 17.1247 4.27933C16.4918 5.67811 16.3384 7.24675 16.6883 8.74166C10.8942 8.46824 5.76158 5.68449 2.32333 1.47983C1.69829 2.54206 1.37227 3.75361 1.37983 4.98608C1.37983 7.40858 2.61233 9.53782 4.4795 10.7887C3.37288 10.7535 2.29071 10.4543 1.32317 9.91607V10.0011C1.32254 11.611 1.87888 13.1715 2.8978 14.4179C3.91672 15.6643 5.33547 16.5198 6.91333 16.8393C5.89092 17.1133 4.82009 17.1544 3.77967 16.9597C4.22751 18.3453 5.09669 19.5564 6.26594 20.4242C7.43518 21.292 8.84616 21.7731 10.302 21.8005C7.83633 23.7356 4.79184 24.7858 1.6575 24.7826C1.105 24.7826 0.553917 24.75 0 24.6877C3.19559 26.7338 6.91123 27.8199 10.7057 27.8171C23.5308 27.8171 30.5362 17.1977 30.5362 8.00499C30.5362 7.70749 30.5363 7.40999 30.515 7.11249C31.8835 6.12772 33.0639 4.90507 34 3.50283L33.9334 3.47449Z" fill="#B1B1B1"/>
</svg>

                      </div>
                      <div className=" w-[36px] h-[36px] rounded-full">
                      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34 17.1034C34 7.71514 26.3882 0.103394 17 0.103394C7.61175 0.103394 0 7.71514 0 17.1034C0 25.5892 6.21633 32.6216 14.3438 33.8966V22.0178H10.0272V17.102H14.3438V13.3591C14.3438 9.09923 16.8824 6.74473 20.7655 6.74473C22.6242 6.74473 24.5707 7.07764 24.5707 7.07764V11.2611H22.4258C20.3136 11.2611 19.6548 12.5715 19.6548 13.9159V17.1034H24.3695L23.6158 22.0192H19.6548V33.898C27.7837 32.6216 34 25.5878 34 17.1034Z" fill="#B1B1B1"/>
</svg>

                      </div>
                      <div className=" w-[36px] h-[36px] rounded-full">
                      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9207 4.62778e-05C12.4257 0.0210228 8.12208 1.82135 4.9511 5.00719C1.78012 8.19304 -4.89445e-05 12.5051 1.00928e-09 17C1.00929e-09 21.5087 1.79107 25.8327 4.97918 29.0209C8.1673 32.209 12.4913 34 17 34C21.5087 34 25.8327 32.209 29.0208 29.0209C32.2089 25.8327 34 21.5087 34 17C34 12.4914 32.2089 8.16735 29.0208 4.97923C25.8327 1.79111 21.5087 4.62778e-05 17 4.62778e-05C16.9736 -1.54259e-05 16.9471 -1.54259e-05 16.9207 4.62778e-05ZM23.9502 10.234C24.0918 10.2312 24.4049 10.2666 24.6089 10.4324C24.7445 10.5501 24.8309 10.7144 24.8512 10.8928C24.8738 11.0245 24.9022 11.3263 24.8795 11.5615C24.6245 14.2503 23.5167 20.7726 22.9528 23.783C22.7148 25.058 22.2459 25.4845 21.7912 25.5255C20.8052 25.6176 20.0557 24.8739 19.0995 24.2477C17.6035 23.266 16.7577 22.6554 15.3057 21.6977C13.6269 20.5927 14.7149 19.9835 15.6712 18.9919C15.9219 18.7312 20.2711 14.7745 20.3561 14.416C20.366 14.3707 20.3759 14.2035 20.2767 14.1157C20.1776 14.0279 20.0303 14.0576 19.924 14.0817C19.7738 14.1157 17.3839 15.6967 12.7542 18.8205C12.0743 19.288 11.4608 19.5146 10.9097 19.5005C10.3034 19.4891 9.13608 19.159 8.26767 18.8771C7.20233 18.53 6.35658 18.3473 6.43025 17.7594C6.4685 17.4534 6.89067 17.1403 7.69533 16.8201C12.6508 14.6611 15.9545 13.2374 17.6092 12.5503C22.3295 10.5868 23.3112 10.2454 23.9502 10.234Z" fill="#B1B1B1"/>
</svg>

                      </div>
                  </div>

                  {/* ---------------- */}
              </div>

              <div className="flex justify-between my-4 border-b-2">
                  <div className=" text-left">
                      <div className=" w-[67px] h-[15.75px] rounded-lg text-[#F2F2F2] font-bold text-[18px] font-[Noto Sans KR]">Explore</div>
                      <div className="text-white w-[81px] h-[12px] rounded-lg my-8 font-normal text-[14px] font-[Noto Sans KR]">Home</div>

                      <div className=" w-[135px] h-[12.25px] rounded-lg my-8 font-normal text-[14px] font-[Noto Sans KR] text-[#f2f2f2]">Trending NFT</div>

                      <div className=" w-[135px] h-[12.25px] rounded-lg my-8 font-normal text-[14px] font-[Noto Sans KR] text-[#f2f2f2]">Trending Collections</div>

                      <div className=" w-[81px] h-[12px] rounded-lg my-8 font-normal text-[14px] font-[Noto Sans KR] text-[#f2f2f2]">Hot Bids</div>

                      <div className="w-[135px] h-[12.25px] rounded-lg my-8 font-normal text-[14px] font-[Noto Sans KR] text-[#f2f2f2]">Live Auctions</div>

                      <div className=" w-[67px] h-[12px] rounded-lg my-8 font-normal text-[14px] font-[Noto Sans KR] text-[#f2f2f2]">Explore</div>
                  </div>

                  <div className="text-left">
                      <div className="w-[50px] h-[15.75px] rounded-lg text-white font-bold text-[18px] font-[Noto Sans KR]">Users</div>
                      <div className=" w-[81px] h-[12px] rounded-lg my-8 font-normal text-[14px] font-[Noto Sans KR] text-[#f2f2f2]">Top Buyers</div>

                      <div className=" w-[135px] h-[12.25px] rounded-lg my-8 font-normal text-[14px] font-[Noto Sans KR] text-[#f2f2f2]">Top Sellers</div>

                      <div className=" w-[135px] h-[12.25px] rounded-lg my-8 font-normal text-[14px] font-[Noto Sans KR] text-[#f2f2f2]">My Profile</div>

                  </div>

                  <div className="text-left">
                      <div className=" w-[90px] h-[26px] rounded-lg text-white font-bold text-[18px] font-[Noto Sans KR]">More Info</div>
                      <div className="bg-[#3B3F44] w-[81px] h-[12px] rounded-lg my-8 font-normal text-[14px] font-[Noto Sans KR] text-[#f2f2f2]">Announcements</div>

                      <div className=" w-[135px] h-[12.25px] rounded-lg my-8 font-normal text-[14px] font-[Noto Sans KR] text-[#f2f2f2]">About Valores</div>

                      <div className=" w-[135px] h-[12.25px] rounded-lg my-8 font-normal text-[14px] font-[Noto Sans KR] text-[#f2f2f2]">Tutorial</div>

                      <div className=" w-[138px] h-[12px] rounded-lg my-8 font-normal text-[14px] font-[Noto Sans KR] text-[#f2f2f2]">Apply for Partnership</div>

                      <div className=" w-[135px] h-[12.25px] rounded-lg my-8 font-normal text-[14px] font-[Noto Sans KR] text-[#f2f2f2]">Support</div>

                      
                  </div>

                  <div className="text-left">
                      <div className=" w-[47px] h-[15.75px] rounded-lg text-white font-bold text-[18px] font-[Noto Sans KR]">Tools</div>
                      <div className=" w-[81px] h-[12px] rounded-lg my-8 font-normal text-[14px] font-[Noto Sans KR] text-[#f2f2f2]">Create NFT</div>

                      <div className=" w-[135px] h-[12.25px] rounded-lg mb-[88px] font-normal text-[14px] font-[Noto Sans KR] text-[#f2f2f2]">Connect Wallet</div>

                      <div className=" w-[296px] h-[12.25px] rounded-lg my-8 font-normal text-[14px] font-[Noto Sans KR] text-[#f2f2f2]">Subscribe to our newsletter for daily updates</div>

                      <div className="bg-[#3B3F44] w-[343px] h-[48px] rounded-2xl my-8  border-white border-2 flex justify-between">
                          <div className=" text-[14px] font-[Noto Sans KR] text-[#f2f2f2] my-auto mx-5">Your Email</div>
                          <div className="bg-[#2DC79D] w-[130px] h-[48px] rounded-xl text-center">
                              <p className=" text-[14px] font-[Noto Sans KR] text-black font-bold py-3">Subscribe</p>
                          </div>

                      </div>

                      

                      
                  </div>
              </div>

              <div className="flex justify-between pb-4">
                  <div className=" w-[280px] h-[15.75px] rounded-lg text-[#F2F2F2] font-bold text-[18px] font-[Noto Sans KR]">Ⓒ2022 CYK NETWORK PTE. LTD.</div>
                  <div className="flex gap-4">
                      <div className=" w-[90px] h-[12.25px] rounded-lg text-[#F2F2F2] font-normal text-[14px] font-[Noto Sans KR]">Privacy Policy</div>
                      
                      <div className=" w-[107px] h-[12.25px] rounded-lg text-[#F2F2F2] font-normal text-[14px] font-[Noto Sans KR]">Terms of Service</div>

                  </div>
              </div>
              
          </footer>
           {/* ----------------*/}

      </div>

      
  )
}
