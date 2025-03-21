function buscar_ciudad_paciente(num){
    //
    console.log(num)
    let opcion = "";
    let opcion_comuna = "";
    if (num == 0) {
        console.log("Entramos 0")
        opcion = document.getElementById("edit_pac_region").value
        opcion_comuna = document.getElementById("edit_pac_comuna")
        if (opcion == 1) {
        let ciudades_1 = new Array("Huara", "Camiña", "Colchane", "Pica", "Pozo Almonte", "Alto Hospicio", "Iquique");
        //let comuna = document.getElementById("secretaria_comuna")
        for (let index = 0; index < ciudades_1.length; index++) {
            //let comuna = document.getElementById("comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 1) {
                    o.remove()
                }
            });
            let elegir_comuna = document.createElement("option")
            elegir_comuna. id = "1"
            elegir_comuna.value = ciudades_1[index]
            elegir_comuna.innerText = ciudades_1[index]
            opcion_comuna.appendChild(elegir_comuna)
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 2) {
                    o.remove()
                }
                //o.remove()
            });
        }
    }
    if(opcion == 2){
        let ciudades_2 = new Array("Antofagasta","Mejillones","Sierra Gorda","Taltal","Calama","Ollagüe","San Pedro de Atacama","María Elena","Tocopilla");
        //
        for (let index = 0; index < ciudades_2.length; index++) {
            //let comuna = document.getElementById("secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 2) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_2[index];
            elegir_comuna. id = "2"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
        
    }
    if(opcion == 3){
        let ciudades_3 = new Array("Chañaral", "Diego de Almagro", "Caldera", "Copiapó", "Tierra Amarilla", "Huasco", "Freirina", "Vallenar","Alto del Carmen");
        //
        for (let index = 0; index < ciudades_3.length; index++) {
            //let comuna = document.getElementById("secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 3) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_3[index];
            elegir_comuna. id = "3"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
        
    }
    //
    if(opcion == 4){
        let ciudades_4 = new Array("Canela", "Illapel", "Los Vilos", "Salamanca", "Andacollo", "Coquimbo", "La Higuera", "La Serena", "Paihuano", "Vicuña", "Combarbalá", "Monte Patria", "Ovalle", "Punitaqui", "Río Hurtado");
        //
        for (let index = 0; index < ciudades_4.length; index++) {
            //let comuna = document.getElementById("secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 4) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_4[index];
            elegir_comuna. id = "4"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
        
    }
    //
    if(opcion == 5){
        let ciudades_5 = new Array("Hanga Roa", "Calle Larga", "Los Andes", "Rinconada", "San Esteban", "Cabildo", "La Ligua", "Papudo", "Petorca", "Zapallar", "Hijuelas", "La Calera", "La Cruz"," Nogales", "Quillota", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "San Antonio", "Santo Domingo", "Catemu", "Llay-Llay", "Panquehue", "Putaendo", "San Felipe", "Santa María", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Valparaíso", "Viña del Mar", "Limache", "Olmué", "Quilpué","Villa Alemana");
        //
        for (let index = 0; index < ciudades_5.length; index++) {
            //let comuna = document.getElementById("secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 5) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_5[index];
            elegir_comuna. id = "5"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
        
    }
    //
    if(opcion == 6){
        let ciudades_6 = new Array("Codegua","Coinco","Coltauco","Doñihue","Graneros","Las Cabras","Machalí","Malloa","Mostazal","Olivar","Peumo","Pichidegua","Quinta de Tilcoco","Rancagua","Rengo","Requínoa","San Vicente de Tagua Tagua","La Estrella","Litueche","Marchigüe","Navidad","Paredones","Pichilemu","Chépica","Chimbarongo","Lolol","Nancagua","Palmilla","Peralillo","Placilla","Pumanque","San Fernando","Santa Cruz");
        //
        for (let index = 0; index < ciudades_6.length; index++) {
            //let comuna = document.getElementById("secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 6) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_6[index];
            elegir_comuna. id = "6"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
        
    }
    //
    if(opcion == 7){
        let ciudades_7 = new Array("Cauquenes","Chanco","Pelluhue","Curicó","Hualañé","Licantén","Molina","Rauco","Romeral","Sagrada Familia","Teno","Vichuquén","Linares","Colbún","Longaví","Parral","Retiro","San Javier","Villa Alegre","Yerbas Buenas","Talca","Constitución","Curepto","Empedrado","Maule","Pelarco","Pencahue","Río Claro","San Clemente","San Rafael");
        //
        for (let index = 0; index < ciudades_7.length; index++) {
            //let comuna = document.getElementById("secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 7) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_7[index];
            elegir_comuna. id = "7"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 8){
        let ciudades_8 = new Array("Arauco","Cañete","Contulmo","Curanilahue","Lebu","Los Álamos","Tirúa","Alto Biobío","Antuco","Cabrero","Laja","Los Ángeles","Mulchén","Nacimiento","Negrete","Quilaco","Quilleco","San Rosendo","Santa Bárbara","Tucapel","Yumbel","Concepción","Coronel","Chiguayante","Florida","Hualpén","Hualqui","Lota","Penco","San Pedro de la Paz","Santa Juana","Talcahuano","Tomé");
        //
        for (let index = 0; index < ciudades_8.length; index++) {
            //let comuna = document.getElementById("secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 8) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_8[index];
            elegir_comuna. id = "8"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 9){
        let ciudades_9 = new Array("Temuco","Carahue","Cholchol","Cunco","Curacautín","Freire","Galvarino","Gorbea","Lautaro","Loncoche","Melipeuco","Nueva Imperial","Padre Las Casas","Perquenco","Pitrufquén","Pucón","Saavedra","Teodoro Schmidt","Toltén","Vilcún","VillarricaTemuco","Carahue","Cholchol","Cunco","Curacautín","Freire","Galvarino","Gorbea","Lautaro","Loncoche","Melipeuco","Nueva Imperial","Padre Las Casas","Perquenco","Pitrufquén","Pucón","Saavedra","Teodoro Schmidt","Toltén","Vilcún","Villarrica");
        //
        for (let index = 0; index < ciudades_9.length; index++) {
            //let comuna = document.getElementById("secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 9) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_9[index];
            elegir_comuna. id = "9"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 10){
        let ciudades_10 = new Array("Ancud","Castro","Chonchi","Curaco de Vélez","Dalcahue","Puqueldón","Queilén","Quemchi","Quellón","Quinchao","Puerto Montt","Puerto Varas","Cochamó","Calbuco","Maullín","Los Muermos","Fresia","Llanquihue","Frutillar","Osorno","Puerto Octay","Purranque","Puyehue","Río Negro","San Juan de la Costa","San Pablo","Chaitén","Futaleufú","Hualaihué","Palena");
        //
        for (let index = 0; index < ciudades_10.length; index++) {
            //let comuna = document.getElementById("secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 10) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_10[index];
            elegir_comuna. id = "10"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 11){
        let ciudades_11 = new Array("Coyhaique","Lago Verde","Aysén","Cisnes","Guaitecas (incluye las islas Guaitecas)","Cochamó","Chile Chico","Río Ibáñez","Cochrane","Tortel");
        //
        for (let index = 0; index < ciudades_11.length; index++) {
            //let comuna = document.getElementById("secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 11) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_11[index];
            elegir_comuna. id = "11"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 12){
        let ciudades_12 = new Array("Punta Arenas","Laguna Blanca","Río Verde","San Gregorio","Natales","Torres del Paine","Porvenir","Primavera","Cabo de Hornos","Antártica");
        //
        for (let index = 0; index < ciudades_12.length; index++) {
            //let comuna = document.getElementById("secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 12) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_12[index];
            elegir_comuna. id = "12"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 13){
        let ciudades_13 = new Array("Alto Jahuel","Bajos de San Agustin","Batuco","Buin","Cerrillos","Cerro Navia","Colina","Conchali","Curacavi","El Bosque","El Monte","Estacion Central","Hospital","Huechuraba","Independencia","Isla de Maipo","La Cisterna","La Florida","La Granja","La Islita","La Pintana","La Reina","Lampa","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maipú","Melipilla","Ñuñoa","Padre Hurtado","Paine","Pedro Aguirre Cerda","Penaflor","Penalolen","Pirque","Providencia","Pudahuel","Puente Alto","Quilicura","Quinta Normal","Recoleta","Renca","San Bernardo","San Joaquin","San Jose de Maipo","San Miguel","San Ramon","Santiago","Talagante","Tiltil","Vitacura");
        //
        for (let index = 0; index < ciudades_13.length; index++) {
            //let comuna = document.getElementById("secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 13) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_13[index];
            elegir_comuna. id = "13"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    if(opcion == 14){
        let ciudades_13 = new Array("Valdivia","Corral","Lanco","Los Lagos","Máfil","Mariquina","Paillaco","Panguipulli","La Unión","Futrono","Lago Ranco","Río Bueno");
        //
        for (let index = 0; index < ciudades_13.length; index++) {
            //let comuna = document.getElementById("secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 14) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_13[index];
            elegir_comuna. id = "14"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    if(opcion == 15){
        let ciudades_13 = new Array("Arica","Camarones","Putre","General Lagos");
        //
        for (let index = 0; index < ciudades_13.length; index++) {
            //let comuna = document.getElementById("secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 15) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_13[index];
            elegir_comuna. id = "15"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    //Listo Funcionando.
    if(opcion == 16){
        let ciudades_16 = new Array("Cobquecura","Coelemu","Ninhue","Portezuelo","Quirihue","Ránquil","Trehuaco","Bulnes","Chillán Viejo","Chillán","El Carmen","Pemuco","Pinto","Quillón","San Ignacio","Yungay","Coihueco","Ñiquén","San Carlos","San Fabián","San Nicolás");
        //
        for (let index = 0; index < ciudades_16.length; index++) {
            //let comuna = document.getElementById("secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 16) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_16[index];
            elegir_comuna. id = "16"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    }
    if (num == 1) {
        opcion = document.getElementById("edit_pac_region").value
        opcion_comuna = document.getElementById("edit_pac_comuna")
        if (opcion == 1) {
        let ciudades_1 = new Array("Huara", "Camiña", "Colchane", "Pica", "Pozo Almonte", "Alto Hospicio", "Iquique");
        //let comuna = document.getElementById("secretaria_comuna")
        for (let index = 0; index < ciudades_1.length; index++) {
            ////opcion_comuna = document.getElementById("edit_secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 1) {
                    o.remove()
                }
            });
            let elegir_comuna = document.createElement("option")
            elegir_comuna. id = "1"
            elegir_comuna.value = ciudades_1[index]
            elegir_comuna.innerText = ciudades_1[index]
            opcion_comuna.appendChild(elegir_comuna)
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 2) {
                    o.remove()
                }
                //o.remove()
            });
        }
    }
    if(opcion == 2){
        let ciudades_2 = new Array("Antofagasta","Mejillones","Sierra Gorda","Taltal","Calama","Ollagüe","San Pedro de Atacama","María Elena","Tocopilla");
        //
        for (let index = 0; index < ciudades_2.length; index++) {
            //opcion_comuna = document.getElementById("edit_secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 2) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_2[index];
            elegir_comuna. id = "2"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
        
    }
    if(opcion == 3){
        let ciudades_3 = new Array("Chañaral", "Diego de Almagro", "Caldera", "Copiapó", "Tierra Amarilla", "Huasco", "Freirina", "Vallenar","Alto del Carmen");
        //
        for (let index = 0; index < ciudades_3.length; index++) {
            //opcion_comuna = document.getElementById("edit_secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 3) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_3[index];
            elegir_comuna. id = "3"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
        
    }
    //
    if(opcion == 4){
        let ciudades_4 = new Array("Canela", "Illapel", "Los Vilos", "Salamanca", "Andacollo", "Coquimbo", "La Higuera", "La Serena", "Paihuano", "Vicuña", "Combarbalá", "Monte Patria", "Ovalle", "Punitaqui", "Río Hurtado");
        //
        for (let index = 0; index < ciudades_4.length; index++) {
            //opcion_comuna = document.getElementById("edit_secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 4) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_4[index];
            elegir_comuna. id = "4"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
        
    }
    //
    if(opcion == 5){
        let ciudades_5 = new Array("Hanga Roa", "Calle Larga", "Los Andes", "Rinconada", "San Esteban", "Cabildo", "La Ligua", "Papudo", "Petorca", "Zapallar", "Hijuelas", "La Calera", "La Cruz"," Nogales", "Quillota", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "San Antonio", "Santo Domingo", "Catemu", "Llay-Llay", "Panquehue", "Putaendo", "San Felipe", "Santa María", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Valparaíso", "Viña del Mar", "Limache", "Olmué", "Quilpué","Villa Alemana");
        //
        for (let index = 0; index < ciudades_5.length; index++) {
            //opcion_comuna = document.getElementById("edit_secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 5) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_5[index];
            elegir_comuna. id = "5"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
        
    }
    //
    if(opcion == 6){
        let ciudades_6 = new Array("Codegua","Coinco","Coltauco","Doñihue","Graneros","Las Cabras","Machalí","Malloa","Mostazal","Olivar","Peumo","Pichidegua","Quinta de Tilcoco","Rancagua","Rengo","Requínoa","San Vicente de Tagua Tagua","La Estrella","Litueche","Marchigüe","Navidad","Paredones","Pichilemu","Chépica","Chimbarongo","Lolol","Nancagua","Palmilla","Peralillo","Placilla","Pumanque","San Fernando","Santa Cruz");
        //
        for (let index = 0; index < ciudades_6.length; index++) {
            //opcion_comuna = document.getElementById("edit_secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 6) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_6[index];
            elegir_comuna. id = "6"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
        
    }
    //
    if(opcion == 7){
        let ciudades_7 = new Array("Cauquenes","Chanco","Pelluhue","Curicó","Hualañé","Licantén","Molina","Rauco","Romeral","Sagrada Familia","Teno","Vichuquén","Linares","Colbún","Longaví","Parral","Retiro","San Javier","Villa Alegre","Yerbas Buenas","Talca","Constitución","Curepto","Empedrado","Maule","Pelarco","Pencahue","Río Claro","San Clemente","San Rafael");
        //
        for (let index = 0; index < ciudades_7.length; index++) {
            //opcion_comuna = document.getElementById("edit_secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 7) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_7[index];
            elegir_comuna. id = "7"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 8){
        let ciudades_8 = new Array("Arauco","Cañete","Contulmo","Curanilahue","Lebu","Los Álamos","Tirúa","Alto Biobío","Antuco","Cabrero","Laja","Los Ángeles","Mulchén","Nacimiento","Negrete","Quilaco","Quilleco","San Rosendo","Santa Bárbara","Tucapel","Yumbel","Concepción","Coronel","Chiguayante","Florida","Hualpén","Hualqui","Lota","Penco","San Pedro de la Paz","Santa Juana","Talcahuano","Tomé");
        //
        for (let index = 0; index < ciudades_8.length; index++) {
            //opcion_comuna = document.getElementById("edit_secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 8) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_8[index];
            elegir_comuna. id = "8"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 9){
        let ciudades_9 = new Array("Temuco","Carahue","Cholchol","Cunco","Curacautín","Freire","Galvarino","Gorbea","Lautaro","Loncoche","Melipeuco","Nueva Imperial","Padre Las Casas","Perquenco","Pitrufquén","Pucón","Saavedra","Teodoro Schmidt","Toltén","Vilcún","VillarricaTemuco","Carahue","Cholchol","Cunco","Curacautín","Freire","Galvarino","Gorbea","Lautaro","Loncoche","Melipeuco","Nueva Imperial","Padre Las Casas","Perquenco","Pitrufquén","Pucón","Saavedra","Teodoro Schmidt","Toltén","Vilcún","Villarrica");
        //
        for (let index = 0; index < ciudades_9.length; index++) {
            //opcion_comuna = document.getElementById("edit_secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 9) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_9[index];
            elegir_comuna. id = "9"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 10){
        let ciudades_10 = new Array("Ancud","Castro","Chonchi","Curaco de Vélez","Dalcahue","Puqueldón","Queilén","Quemchi","Quellón","Quinchao","Puerto Montt","Puerto Varas","Cochamó","Calbuco","Maullín","Los Muermos","Fresia","Llanquihue","Frutillar","Osorno","Puerto Octay","Purranque","Puyehue","Río Negro","San Juan de la Costa","San Pablo","Chaitén","Futaleufú","Hualaihué","Palena");
        //
        for (let index = 0; index < ciudades_10.length; index++) {
            //opcion_comuna = document.getElementById("edit_secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 10) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_10[index];
            elegir_comuna. id = "10"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 11){
        let ciudades_11 = new Array("Coyhaique","Lago Verde","Aysén","Cisnes","Guaitecas (incluye las islas Guaitecas)","Cochamó","Chile Chico","Río Ibáñez","Cochrane","Tortel");
        //
        for (let index = 0; index < ciudades_11.length; index++) {
            //opcion_comuna = document.getElementById("edit_secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 11) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_11[index];
            elegir_comuna. id = "11"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 12){
        let ciudades_12 = new Array("Punta Arenas","Laguna Blanca","Río Verde","San Gregorio","Natales","Torres del Paine","Porvenir","Primavera","Cabo de Hornos","Antártica");
        //
        for (let index = 0; index < ciudades_12.length; index++) {
            //opcion_comuna = document.getElementById("edit_secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 12) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_12[index];
            elegir_comuna. id = "12"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 13){
        let ciudades_13 = new Array("Alto Jahuel","Bajos de San Agustin","Batuco","Buin","Cerrillos","Cerro Navia","Colina","Conchali","Curacavi","El Bosque","El Monte","Estacion Central","Hospital","Huechuraba","Independencia","Isla de Maipo","La Cisterna","La Florida","La Granja","La Islita","La Pintana","La Reina","Lampa","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maipú","Melipilla","Ñuñoa","Padre Hurtado","Paine","Pedro Aguirre Cerda","Penaflor","Penalolen","Pirque","Providencia","Pudahuel","Puente Alto","Quilicura","Quinta Normal","Recoleta","Renca","San Bernardo","San Joaquin","San Jose de Maipo","San Miguel","San Ramon","Santiago","Talagante","Tiltil","Vitacura");
        //
        for (let index = 0; index < ciudades_13.length; index++) {
            //opcion_comuna = document.getElementById("edit_secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 13) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_13[index];
            elegir_comuna. id = "13"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    if(opcion == 14){
        let ciudades_13 = new Array("Valdivia","Corral","Lanco","Los Lagos","Máfil","Mariquina","Paillaco","Panguipulli","La Unión","Futrono","Lago Ranco","Río Bueno");
        //
        for (let index = 0; index < ciudades_13.length; index++) {
            //opcion_comuna = document.getElementById("edit_secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 14) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_13[index];
            elegir_comuna. id = "14"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    if(opcion == 15){
        let ciudades_13 = new Array("Arica","Camarones","Putre","General Lagos");
        //
        for (let index = 0; index < ciudades_13.length; index++) {
            //opcion_comuna = document.getElementById("edit_secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 15) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_13[index];
            elegir_comuna. id = "15"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }
    //Listo Funcionando.
    if(opcion == 16){
        let ciudades_16 = new Array("Cobquecura","Coelemu","Ninhue","Portezuelo","Quirihue","Ránquil","Trehuaco","Bulnes","Chillán Viejo","Chillán","El Carmen","Pemuco","Pinto","Quillón","San Ignacio","Yungay","Coihueco","Ñiquén","San Carlos","San Fabián","San Nicolás");
        //
        for (let index = 0; index < ciudades_16.length; index++) {
            //opcion_comuna = document.getElementById("edit_secretaria_comuna")
            let comuna_s = opcion_comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 16) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_16[index];
            elegir_comuna. id = "16"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            opcion_comuna.appendChild(elegir_comuna)
        }
    }    
    }
    console.warn(opcion_comuna)
    //
    
}