'use strict';

const loaderBtn3 = document.querySelector('.loader__btn_3');
const loaderBack = document.getElementById('loader-back-id');
const loaderTransparent = document.getElementById('loader-transparent-id');
const loaderInf = document.getElementById('loader-inf-id');
const evolutionTech = document.querySelector('.evolution-tech');

const loaderBackClass = 'loader__back_none';
const loaderTransparentClass = 'loader__transparent_none';
const loaderInfClass = 'loader__inf';
const loaderInfClassNone = 'loader__inf_none';
const evolutionTechSliderBlock = 'evolution-tech_sliderBlock';

loaderInf.classList.add(loaderInfClassNone);

loaderBtn3.addEventListener('mouseover', () => {
  loaderBack.classList.add(loaderBackClass);
  loaderTransparent.classList.remove(loaderTransparentClass);
  loaderInf.classList.remove(loaderInfClassNone);
  loaderInf.classList.add(loaderInfClass);
});

loaderBtn3.addEventListener('mouseout', () => {
  loaderBack.classList.remove(loaderBackClass);
  loaderTransparent.classList.add(loaderTransparentClass);
  loaderInf.classList.remove(loaderInfClass);
  loaderInf.classList.add(loaderInfClassNone);
});


