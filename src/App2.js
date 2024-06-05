import React from 'react';
import './App.css'; // Importing the CSS file
import './index.css';

// Importing components
import Navbar from './components/Navbar';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';

function App() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />
      <Navbar />
      <div className="container-fluid">
      <div className="flex flex-col px-12 pt-20 pb-12 bg-slate-100 max-md:px-5">
        <div className="flex gap-5 justify-between px-px mt-7 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between items-center max-md:flex-wrap">
            <div className="flex flex-col justify-center self-stretch">
              <div className="flex justify-center items-center px-3.5 py-2.5 bg-teal-500 rounded-lg">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce521cf91b59fb5129126aee9292570209b98e5f2d13a787de97ced63ac33fbd?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                  className="w-4 aspect-[0.94]"
                />
              </div>
            </div>
            <div className="flex flex-col self-stretch my-auto text-sm font-extrabold text-blue-900 uppercase whitespace-nowrap">
              <div>dashboard</div>
              <div className="shrink-0 mt-1 h-0.5 bg-teal-500" />
            </div>
            <div className="self-stretch pb-1.5 my-auto text-sm font-extrabold text-indigo-400 uppercase whitespace-nowrap">
              reports
            </div>
            <div className="self-stretch pb-1.5 my-auto text-sm font-extrabold text-indigo-400 uppercase">
              user management
            </div>
            <div className="self-stretch pb-1.5 my-auto text-sm font-extrabold text-indigo-400 uppercase">
              site management
            </div>
          </div>
          <div className="flex flex-col justify-center py-2.5">
            <div className="flex gap-1.5">
              <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center items-start py-px rounded-3xl border border-blue-900 border-solid">
                  <div className="shrink-0 bg-blue-900 rounded-full h-[17px]" />
                </div>
              </div>
              <div className="text-xs font-bold text-blue-900">MLT</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-6 py-3 mt-3 text-blue-900 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5 max-md:max-w-full">
          <div className="justify-center text-xl font-bold whitespace-nowrap max-md:max-w-full">
            Dashboard
          </div>
          <div className="flex gap-5 mt-4 max-md:flex-wrap">
            <div className="flex flex-1 gap-3 whitespace-nowrap">
              <div className="my-auto text-xs font-extrabold uppercase">
                country
              </div>
              <div className="flex flex-1 gap-5 justify-between p-3 text-xs rounded-lg bg-slate-100">
                <div>Global</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bade85bdb3af57d4d043f0ef6cef92d9fb346eaa14ec7380891a64062a357cc4?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                  className="shrink-0 w-4 aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-1 gap-3">
              <div className="my-auto text-xs font-extrabold uppercase">
                event type
              </div>
              <div className="flex flex-1 gap-5 justify-between p-3 text-xs whitespace-nowrap rounded-lg bg-slate-100">
                <div>All</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f70de0aaae6629c76575a29d6b01dc0cc1cc00be326890bb71dccbb821fc03f7?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                  className="shrink-0 w-4 aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-1 gap-3">
              <div className="my-auto text-xs font-extrabold uppercase">
                event format
              </div>
              <div className="flex flex-1 gap-5 justify-between p-3 text-xs whitespace-nowrap rounded-lg bg-slate-100">
                <div>All</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5248657168219141a13eeb1c9f7f7f2b5231cc00f3c97ecfbf6fafe9e0ae2020?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                  className="shrink-0 w-4 aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-1 gap-3 whitespace-nowrap">
              <div className="my-auto text-xs font-extrabold uppercase">
                associates
              </div>
              <div className="flex flex-1 gap-5 justify-between p-3 text-xs rounded-lg bg-slate-100">
                <div>All</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c4fad17754180381b28f49edc85768dc91039fe46b07dbca163b87a2c0852f1?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                  className="shrink-0 w-4 aspect-square"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="my-auto text-xs font-extrabold uppercase">
                date range
              </div>
              <div className="flex gap-3 justify-between p-3 text-xs rounded-lg bg-slate-100">
                <div>01/01/2023 - 01/01/2024</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/43aaedc90e084c9f1003d5ff44ac5d26639753ebe308001907975e357c19ac61?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                  className="shrink-0 w-4 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow p-6 mx-auto w-full text-blue-900 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5 max-md:mt-8">
                <div className="flex gap-2 text-xs font-extrabold uppercase">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/90c632989c43fc47d4b2bd1745504c71607d01740a9de3537131ea7abbc5378f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 w-8 aspect-square"
                  />
                  <div className="my-auto">virtual events</div>
                </div>
                <div className="flex flex-col mt-8 text-xs">
                  <div className="flex gap-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a2014294d7f581302c8bf81ecb75cbfe7a085beaea88fa57df00a52ae3c7082?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="font-bold">MGS Leadership</div>
                      <div>Virtual</div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a2014294d7f581302c8bf81ecb75cbfe7a085beaea88fa57df00a52ae3c7082?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="font-bold">NextGen Presentation</div>
                      <div>Virtual</div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/48f74e37c357d094e860faf473e5e7cd7ba6286a8176e3f392b76d396b66118c?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="font-bold">MELE Trainees</div>
                      <div>Virtual</div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef74805ea4cff574948a86b5b8d0ffe8f6df9486192ae72a65d8908561b2fea3?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="font-bold">Q1 MVA Broadcast</div>
                      <div>McLean, Virginia</div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef74805ea4cff574948a86b5b8d0ffe8f6df9486192ae72a65d8908561b2fea3?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="font-bold">Q2 MVA Broadcast</div>
                      <div>McLean, Virginia</div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef74805ea4cff574948a86b5b8d0ffe8f6df9486192ae72a65d8908561b2fea3?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="font-bold">Q3 GIC Broadcast</div>
                      <div>Chicago, Illinois</div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef74805ea4cff574948a86b5b8d0ffe8f6df9486192ae72a65d8908561b2fea3?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="font-bold">Q4 MVA Broadcast</div>
                      <div>McLean, Virginia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow items-end pt-20 pb-1 pl-20 min-h-[572px] max-md:mt-8 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/24f49f8ae23d76fe171b538c87f57e8dd25f73fe7da8f162073823cff903036f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f49f8ae23d76fe171b538c87f57e8dd25f73fe7da8f162073823cff903036f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f49f8ae23d76fe171b538c87f57e8dd25f73fe7da8f162073823cff903036f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f49f8ae23d76fe171b538c87f57e8dd25f73fe7da8f162073823cff903036f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f49f8ae23d76fe171b538c87f57e8dd25f73fe7da8f162073823cff903036f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f49f8ae23d76fe171b538c87f57e8dd25f73fe7da8f162073823cff903036f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f49f8ae23d76fe171b538c87f57e8dd25f73fe7da8f162073823cff903036f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f49f8ae23d76fe171b538c87f57e8dd25f73fe7da8f162073823cff903036f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative z-10 gap-5 mt-20 mr-64 max-md:mt-10 max-md:mr-2.5">
                  <div className="flex flex-col">
                    <div className="flex gap-5">
                      <div className="flex flex-col flex-1 justify-center">
                        <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                      </div>
                      <div className="flex flex-col flex-1 justify-center">
                        <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                      </div>
                    </div>
                    <div className="flex gap-2 items-start self-center mt-2">
                      <div className="flex flex-col flex-1 justify-center">
                        <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                      </div>
                      <div className="flex flex-col flex-1 justify-center">
                        <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center self-end mt-7">
                    <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                  </div>
                </div>
                <div className="flex relative flex-col pb-20 mt-0 max-w-full w-[883px]">
                  <div className="flex flex-col w-[57px]">
                    <div className="flex flex-col justify-center items-start max-md:pr-5">
                      <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                    </div>
                    <div className="flex flex-col justify-center self-end mt-20 w-5 max-md:mt-10">
                      <div className="shrink-0 w-full h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                    </div>
                  </div>
                  <div className="flex z-10 flex-col mt-0 ml-36 w-[91px] max-md:ml-2.5">
                    <div className="flex flex-col justify-center ml-4 w-5 max-md:ml-2.5">
                      <div className="shrink-0 w-full h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                    </div>
                    <div className="flex gap-5 items-start">
                      <div className="flex flex-col flex-1 justify-center mt-3">
                        <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                      </div>
                      <div className="flex flex-col flex-1 justify-center">
                        <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex z-10 flex-col self-end mt-12 max-w-full w-[149px] max-md:mt-10">
                    <div className="flex flex-col justify-center items-start max-md:pr-5">
                      <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                    </div>
                    <div className="flex flex-col self-end mt-36 w-[26px] max-md:mt-10">
                      <div className="flex justify-center items-center px-1 w-full rounded-sm border border-solid bg-slate-100 border-slate-200 h-[26px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1e44d23fa245f8628836da6e705ce675ff6da1c5d21f59020b92d35ce58512d?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                          className="w-full aspect-square"
                        />
                      </div>
                      <div className="flex justify-center items-center px-1 mt-1 w-full rounded-sm border border-solid bg-slate-100 border-slate-200 h-[26px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/04c61ea5a87901d0d61cfaf131f7f3917066be315eaf2fd6fc4515e83ee64083?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                          className="w-full aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center self-center mt-0 w-5">
                    <div className="shrink-0 w-full h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-6 text-blue-900 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-col items-start p-6 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5">
            <div className="justify-center text-xs font-extrabold uppercase">
              total events
            </div>
            <div className="mt-2 text-xl font-bold">36</div>
          </div>
          <div className="flex flex-col items-start p-6 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5">
            <div className="justify-center text-xs font-extrabold uppercase">
              countries visited
            </div>
            <div className="mt-2 text-xl font-bold">13</div>
          </div>
          <div className="flex flex-col items-start p-6 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5">
            <div className="justify-center text-xs font-extrabold uppercase">
              Total Associates at Events
            </div>
            <div className="mt-2 text-xl font-bold">9,000+</div>
          </div>
        </div>
        <div className="flex flex-col p-6 mt-6 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-start pr-20 font-extrabold uppercase max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between text-sm text-indigo-400">
              <div className="flex flex-col text-blue-900 whitespace-nowrap">
                <div>countries</div>
                <div className="shrink-0 mt-1 h-0.5 bg-teal-500" />
              </div>
              <div className="pb-1.5 whitespace-nowrap">associates</div>
              <div className="pb-1.5">after visit</div>
            </div>
            <div className="flex gap-4 mt-3">
              <div className="my-auto text-xs text-indigo-400">
                Number of event on active selection
              </div>
              <div className="text-sm text-blue-900">99</div>
            </div>
          </div>
          <div className="flex flex-col mt-4 text-xs text-blue-900 max-md:max-w-full">
            <div className="flex gap-2 justify-between pr-20 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[990px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 justify-between mt-2 max-md:flex-wrap">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[892px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 justify-between mt-2 max-md:flex-wrap">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[889px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 justify-between mt-2 max-md:flex-wrap">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[863px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 justify-between mt-2 max-md:flex-wrap">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[777px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[688px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[612px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[551px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[426px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[326px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[258px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap">
                <div className="shrink-0 my-auto h-3 bg-indigo-400 w-[248px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap">
                <div className="shrink-0 my-auto h-3 bg-indigo-400 w-[245px]" />
                <div>99%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-12 pt-20 pb-12 bg-slate-100 max-md:px-5">
        <div className="flex gap-5 justify-between px-px mt-7 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between items-center max-md:flex-wrap">
            <div className="flex flex-col justify-center self-stretch">
              <div className="flex justify-center items-center px-3.5 py-2.5 bg-teal-500 rounded-lg">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce521cf91b59fb5129126aee9292570209b98e5f2d13a787de97ced63ac33fbd?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                  className="w-4 aspect-[0.94]"
                />
              </div>
            </div>
            <div className="flex flex-col self-stretch my-auto text-sm font-extrabold text-blue-900 uppercase whitespace-nowrap">
              <div>dashboard</div>
              <div className="shrink-0 mt-1 h-0.5 bg-teal-500" />
            </div>
            <div className="self-stretch pb-1.5 my-auto text-sm font-extrabold text-indigo-400 uppercase whitespace-nowrap">
              reports
            </div>
            <div className="self-stretch pb-1.5 my-auto text-sm font-extrabold text-indigo-400 uppercase">
              user management
            </div>
            <div className="self-stretch pb-1.5 my-auto text-sm font-extrabold text-indigo-400 uppercase">
              site management
            </div>
          </div>
          <div className="flex flex-col justify-center py-2.5">
            <div className="flex gap-1.5">
              <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center items-start py-px rounded-3xl border border-blue-900 border-solid">
                  <div className="shrink-0 bg-blue-900 rounded-full h-[17px]" />
                </div>
              </div>
              <div className="text-xs font-bold text-blue-900">MLT</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-6 py-3 mt-3 text-blue-900 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5 max-md:max-w-full">
          <div className="justify-center text-xl font-bold whitespace-nowrap max-md:max-w-full">
            Dashboard
          </div>
          <div className="flex gap-5 mt-4 max-md:flex-wrap">
            <div className="flex flex-1 gap-3 whitespace-nowrap">
              <div className="my-auto text-xs font-extrabold uppercase">
                country
              </div>
              <div className="flex flex-1 gap-5 justify-between p-3 text-xs rounded-lg bg-slate-100">
                <div>Global</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bade85bdb3af57d4d043f0ef6cef92d9fb346eaa14ec7380891a64062a357cc4?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                  className="shrink-0 w-4 aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-1 gap-3">
              <div className="my-auto text-xs font-extrabold uppercase">
                event type
              </div>
              <div className="flex flex-1 gap-5 justify-between p-3 text-xs whitespace-nowrap rounded-lg bg-slate-100">
                <div>All</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f70de0aaae6629c76575a29d6b01dc0cc1cc00be326890bb71dccbb821fc03f7?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                  className="shrink-0 w-4 aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-1 gap-3">
              <div className="my-auto text-xs font-extrabold uppercase">
                event format
              </div>
              <div className="flex flex-1 gap-5 justify-between p-3 text-xs whitespace-nowrap rounded-lg bg-slate-100">
                <div>All</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5248657168219141a13eeb1c9f7f7f2b5231cc00f3c97ecfbf6fafe9e0ae2020?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                  className="shrink-0 w-4 aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-1 gap-3 whitespace-nowrap">
              <div className="my-auto text-xs font-extrabold uppercase">
                associates
              </div>
              <div className="flex flex-1 gap-5 justify-between p-3 text-xs rounded-lg bg-slate-100">
                <div>All</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c4fad17754180381b28f49edc85768dc91039fe46b07dbca163b87a2c0852f1?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                  className="shrink-0 w-4 aspect-square"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="my-auto text-xs font-extrabold uppercase">
                date range
              </div>
              <div className="flex gap-3 justify-between p-3 text-xs rounded-lg bg-slate-100">
                <div>01/01/2023 - 01/01/2024</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/43aaedc90e084c9f1003d5ff44ac5d26639753ebe308001907975e357c19ac61?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                  className="shrink-0 w-4 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow p-6 mx-auto w-full text-blue-900 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5 max-md:mt-8">
                <div className="flex gap-2 text-xs font-extrabold uppercase">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/90c632989c43fc47d4b2bd1745504c71607d01740a9de3537131ea7abbc5378f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 w-8 aspect-square"
                  />
                  <div className="my-auto">virtual events</div>
                </div>
                <div className="flex flex-col mt-8 text-xs">
                  <div className="flex gap-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a2014294d7f581302c8bf81ecb75cbfe7a085beaea88fa57df00a52ae3c7082?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="font-bold">MGS Leadership</div>
                      <div>Virtual</div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a2014294d7f581302c8bf81ecb75cbfe7a085beaea88fa57df00a52ae3c7082?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="font-bold">NextGen Presentation</div>
                      <div>Virtual</div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/48f74e37c357d094e860faf473e5e7cd7ba6286a8176e3f392b76d396b66118c?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="font-bold">MELE Trainees</div>
                      <div>Virtual</div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef74805ea4cff574948a86b5b8d0ffe8f6df9486192ae72a65d8908561b2fea3?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="font-bold">Q1 MVA Broadcast</div>
                      <div>McLean, Virginia</div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef74805ea4cff574948a86b5b8d0ffe8f6df9486192ae72a65d8908561b2fea3?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="font-bold">Q2 MVA Broadcast</div>
                      <div>McLean, Virginia</div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef74805ea4cff574948a86b5b8d0ffe8f6df9486192ae72a65d8908561b2fea3?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="font-bold">Q3 GIC Broadcast</div>
                      <div>Chicago, Illinois</div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef74805ea4cff574948a86b5b8d0ffe8f6df9486192ae72a65d8908561b2fea3?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="font-bold">Q4 MVA Broadcast</div>
                      <div>McLean, Virginia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow items-end pt-20 pb-1 pl-20 min-h-[572px] max-md:mt-8 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/24f49f8ae23d76fe171b538c87f57e8dd25f73fe7da8f162073823cff903036f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f49f8ae23d76fe171b538c87f57e8dd25f73fe7da8f162073823cff903036f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f49f8ae23d76fe171b538c87f57e8dd25f73fe7da8f162073823cff903036f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f49f8ae23d76fe171b538c87f57e8dd25f73fe7da8f162073823cff903036f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f49f8ae23d76fe171b538c87f57e8dd25f73fe7da8f162073823cff903036f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f49f8ae23d76fe171b538c87f57e8dd25f73fe7da8f162073823cff903036f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f49f8ae23d76fe171b538c87f57e8dd25f73fe7da8f162073823cff903036f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/24f49f8ae23d76fe171b538c87f57e8dd25f73fe7da8f162073823cff903036f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative z-10 gap-5 mt-20 mr-64 max-md:mt-10 max-md:mr-2.5">
                  <div className="flex flex-col">
                    <div className="flex gap-5">
                      <div className="flex flex-col flex-1 justify-center">
                        <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                      </div>
                      <div className="flex flex-col flex-1 justify-center">
                        <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                      </div>
                    </div>
                    <div className="flex gap-2 items-start self-center mt-2">
                      <div className="flex flex-col flex-1 justify-center">
                        <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                      </div>
                      <div className="flex flex-col flex-1 justify-center">
                        <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center self-end mt-7">
                    <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                  </div>
                </div>
                <div className="flex relative flex-col pb-20 mt-0 max-w-full w-[883px]">
                  <div className="flex flex-col w-[57px]">
                    <div className="flex flex-col justify-center items-start max-md:pr-5">
                      <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                    </div>
                    <div className="flex flex-col justify-center self-end mt-20 w-5 max-md:mt-10">
                      <div className="shrink-0 w-full h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                    </div>
                  </div>
                  <div className="flex z-10 flex-col mt-0 ml-36 w-[91px] max-md:ml-2.5">
                    <div className="flex flex-col justify-center ml-4 w-5 max-md:ml-2.5">
                      <div className="shrink-0 w-full h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                    </div>
                    <div className="flex gap-5 items-start">
                      <div className="flex flex-col flex-1 justify-center mt-3">
                        <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                      </div>
                      <div className="flex flex-col flex-1 justify-center">
                        <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex z-10 flex-col self-end mt-12 max-w-full w-[149px] max-md:mt-10">
                    <div className="flex flex-col justify-center items-start max-md:pr-5">
                      <div className="shrink-0 w-5 h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                    </div>
                    <div className="flex flex-col self-end mt-36 w-[26px] max-md:mt-10">
                      <div className="flex justify-center items-center px-1 w-full rounded-sm border border-solid bg-slate-100 border-slate-200 h-[26px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1e44d23fa245f8628836da6e705ce675ff6da1c5d21f59020b92d35ce58512d?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                          className="w-full aspect-square"
                        />
                      </div>
                      <div className="flex justify-center items-center px-1 mt-1 w-full rounded-sm border border-solid bg-slate-100 border-slate-200 h-[26px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/04c61ea5a87901d0d61cfaf131f7f3917066be315eaf2fd6fc4515e83ee64083?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                          className="w-full aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center self-center mt-0 w-5">
                    <div className="shrink-0 w-full h-5 bg-white rounded-full border-2 border-blue-900 border-solid stroke-[2px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-6 text-blue-900 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-col items-start p-6 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5">
            <div className="justify-center text-xs font-extrabold uppercase">
              total events
            </div>
            <div className="mt-2 text-xl font-bold">36</div>
          </div>
          <div className="flex flex-col items-start p-6 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5">
            <div className="justify-center text-xs font-extrabold uppercase">
              countries visited
            </div>
            <div className="mt-2 text-xl font-bold">13</div>
          </div>
          <div className="flex flex-col items-start p-6 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5">
            <div className="justify-center text-xs font-extrabold uppercase">
              Total Associates at Events
            </div>
            <div className="mt-2 text-xl font-bold">9,000+</div>
          </div>
        </div>
        <div className="flex flex-col p-6 mt-6 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-start pr-20 font-extrabold uppercase max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between text-sm text-indigo-400">
              <div className="flex flex-col text-blue-900 whitespace-nowrap">
                <div>countries</div>
                <div className="shrink-0 mt-1 h-0.5 bg-teal-500" />
              </div>
              <div className="pb-1.5 whitespace-nowrap">associates</div>
              <div className="pb-1.5">after visit</div>
            </div>
            <div className="flex gap-4 mt-3">
              <div className="my-auto text-xs text-indigo-400">
                Number of event on active selection
              </div>
              <div className="text-sm text-blue-900">99</div>
            </div>
          </div>
          <div className="flex flex-col mt-4 text-xs text-blue-900 max-md:max-w-full">
            <div className="flex gap-2 justify-between pr-20 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[990px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 justify-between mt-2 max-md:flex-wrap">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[892px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 justify-between mt-2 max-md:flex-wrap">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[889px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 justify-between mt-2 max-md:flex-wrap">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[863px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 justify-between mt-2 max-md:flex-wrap">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[777px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[688px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[612px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[551px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap max-md:flex-wrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[426px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[326px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap">
                <div className="shrink-0 my-auto max-w-full h-3 bg-indigo-400 w-[258px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap">
                <div className="shrink-0 my-auto h-3 bg-indigo-400 w-[248px]" />
                <div>99%</div>
              </div>
            </div>
            <div className="flex gap-2 pr-20 mt-2 max-md:flex-wrap max-md:pr-5">
              <div>Country name</div>
              <div className="flex gap-2 whitespace-nowrap">
                <div className="shrink-0 my-auto h-3 bg-indigo-400 w-[245px]" />
                <div>99%</div>
              </div>
            </div>
          </div>
        </div>
      </div>




      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
