const fetchPokemon = (url) => { 
    fetch(url).then((res) => {
        if( res.status != "200"){
            console.log( res );

        }else{
            console.log(res);
            return res.json();
        }
        
    }).then(
        (data) => { 
            console.log(data)
            pokeName(  data.id, data.forms[0].name  );
            pokeImage(data.sprites.front_default);
            pokeDetails(data.forms[0].name, data.types[0].type['name'], data.game_indices[0].version['name'],data.stats );
            pokeSizes(data.height,data.weight);
            
         }

    )  //Aquí tenemos una promesa
 }

 //fetchPokemon('https://pokeapi.co/api/v2/pokemon/ditto');

 const imprimir = () => 
{
    const pokeName= document.getElementById('pokeName');
    fetchPokemon('https://pokeapi.co/api/v2/pokemon/' + pokeName.value.toLowerCase() );
}

const pokeImage = (url) => { 
    document.getElementById('pokeImage').src= url;
 }

 const pokeDetails= (pname,ptype,fgame, moves) => { 
    const details= document.getElementById('pokeDetails');
    const label0= document.getElementById('label0');
    const nivel0= document.getElementById('nivel0');
    const label1= document.getElementById('label1');
    const nivel1= document.getElementById('nivel1');
    const label2= document.getElementById('label2');
    const nivel2= document.getElementById('nivel2');
    const label3= document.getElementById('label3');
    const nivel3= document.getElementById('nivel3');
    const label4= document.getElementById('label4');
    const nivel4= document.getElementById('nivel4');
    const label5= document.getElementById('label5');
    const nivel5= document.getElementById('nivel5');


    details.innerHTML= capitalizeFirstLetter(pname) + ' es un pokemon de tipo ' + ptype + '. Su primera aparición fue en el juego ' + fgame;

    label0.innerHTML= moves[0].stat['name'];
    nivel0.innerHTML= moves[0].base_stat;
    label1.innerHTML= moves[1].stat['name'];
    nivel1.innerHTML= moves[1].base_stat;
    label2.innerHTML= moves[2].stat['name'];
    nivel2.innerHTML= moves[2].base_stat;
    label3.innerHTML= moves[3].stat['name'];
    nivel3.innerHTML= moves[3].base_stat;
    label4.innerHTML= moves[4].stat['name'];
    nivel4.innerHTML= moves[4].base_stat;
    label5.innerHTML= moves[5].stat['name'];
    nivel5.innerHTML= moves[5].base_stat;
    
  }

  const pokeName= (id, pname)=>{
      const namPokemon= document.getElementById('namPokemon');

      namPokemon.innerHTML= '#' + id + ' ' + pname;
  }

  const pokeSizes=( w, h) =>{
      const pokePeso= document.getElementById('pokePeso');
      const pokeAltura= document.getElementById('pokeAltura');

      pokeAltura.innerHTML= "ALTURA: " + h + 'm';
      pokePeso.innerHTML= "PESO: " + w + 'kg';
  }

  const capitalizeFirstLetter = ([ first, ...rest ], locale = navigator.language) =>
  first.toLocaleUpperCase(locale) + rest.join('')


  