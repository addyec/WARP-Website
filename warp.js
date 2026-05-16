function changeTab(newTab){
  let tabs = ['generalTab', 'logsTab', 'dataTab', 'communityTab'];
  
  tabs.forEach(function (tab){
    document.getElementById(tab).classList.add("tab");
    document.getElementById(tab).classList.remove("visibleTab");
  });
  
  document.getElementById(newTab).classList.add("visibleTab");
    document.getElementById(newTab).classList.remove("tab");
}