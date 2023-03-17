// 1. Generate all sections using data and js
// 2. Add event listners to play audio 
// 3. Audio navbar 
// 4. Scroll State 
// 5. queue

 window.addEventListener('load',bootUpApp);

 function bootUpApp(){
    fetchAndRenderAllSections();
 }

 function fetchAndRenderAllSections(){
    //fetch all section data
    fetch()
    renderSection(data);
 }
 function renderSection(data){
    makeSectionDom(data);
 }