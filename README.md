# Bonus features
- [ ] localstorage to fix this - (TODO entry of the app now is this - http://127.0.0.1:5173/. IF the user does not go there, the fetches will not be made, since they are set to be null in use-fetch hook. So what we need to do is either make an empty list to be in use-fetch hook by default instead of null or somehow, if data is not fetched, fetch it when loading the search results page.)
- [ ] implementing localstorage to save the fetched data from the homescreen.
- [ ] Mimicking loading functionality - fetching what is "static" quickly, fetching businesses with setTimeout to imitate loading, so the user is aware, that he will get some information soon. Not having a long initial loading screen.
- [x] json server to to mimic and provide fake data
- [ ] pagination (100 businesses)
- [ ] absolute paths in App.jsx
- [x] active class
- [x] loading effect faked in useFetch hook by adding setTimeout
- [x] catch error in useFetch hook and display it in the component


# Actual project requirements
- [x] Topbar komponentas: Tai turėtų apimti logotipą ir navigacijos meniu, kuris kol kas gali būti statinis (vėliau bus įtrauktas react-router).
- [x] Paieškos juosta: Centrinė paieškos juosta su mygtuku. Nors interaktyvi paieška dar nebus įgyvendinta, svarbu paruošti input elementą ir paieškos mygtuką.
- [x] Kategorijos kortelė: Paslaugų sekcijoje, kiekviena paslauga (pvz., “Cleaning”, “Repair”) turėtų būti atvaizduojama kaip atskiras komponentas su ikona ir tekstiniu aprašymu.
- [x] Stilius: SCSS modules arba Styled-components
- [ ] Responsive design (optional): Naudoti CSS media queries, kad puslapis tinkamai atrodytų įvairaus dydžio įrenginiuose.
- [x] Būsenos valdymas: Nors šioje užduotyje būsenos valdymo galimybių nebus daug, verta paruošti būsimam funkcionalumui su useState. Galima paruošti search inputui.
- [x] Topbar komponentas: Įgyvendinti navigaciją react-router-dom pagalba tarp puslapių Home, Services ir About Us. Naudoti Link komponentą
- [x] Login mygtukas: Paspaudus Login/Sign Up mygtuką naviguoti į Login puslapį naudojant useNavigate hooką
- [x] Paslaugų kortelė: Paspaudus ant kortelės naviguoti į /search/:category routą
- [x] Routes: Įgyivendinti naujus maršrutus (routes) tokius kaip: Home, Services, About Us, Login, Register, SearchCategory
- [x] Categories komponentas: Įgyvendinti kategorijų pasirinkimą. Paspaudus ant kitos kategorijos turi pasikeisti ir URL iš /search/cleaning į /search/repair
- [x] Filtravimas: Išfiltruoti tik tas paslaugas kurios įeina į kategoriją
- [ ] Save as favorite (optional): Pridėti ant kortelės širdelės arba žymos ikoną, kurią nuspaudus būtų išsaugotą paslauga į localStorage. Galite naudoti useLocalStorage hooksą.