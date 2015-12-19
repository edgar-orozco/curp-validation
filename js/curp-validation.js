var CURP = (function () {
	
	var modulo = {};

	/**
	 * Valida que la cadena proporcionada se apegue a la definición de la CURP
	 */
	modulo.valida = function (curp) {
		var reg = "";
		console.log(curp.length);
		if(curp.length == 18)
		{
			var digito = this.verifica(curp);
			
			reg = /[A-Z]{4}\d{6}[HM][A-Z]{2}[B-DF-HJ-NP-TV-Z]{3}[A-Z0-9][0-9]/;

			if(curp.search(reg))
			{
				return false;
			}
			
			if(!(parseInt(digito) == parseInt(curp.substring(17,18))))
			{
				return false;
			}
			return true;
		}
		else
		{
			return false;
		}
	};

	/**
	 * Comprueba el dígito verificador mediante el algoritmo de LUHN "tropicalizado"
	 */
	modulo.verifica = function(curp){
		var segRaiz      = curp.substring(0,17);
		var chrCaracter  = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
		var intFactor    = new Array(17);
		var lngSuma      = 0.0;
		var lngDigito    = 0.0;
		
		for(var i=0; i<17; i++)
		{
			for(var j=0;j<37; j++)
			{
				if(segRaiz.substring(i,i+1)==chrCaracter.substring(j,j+1))
				{  				
					intFactor[i]=j;
				}
			}
		}
		
		for(var k = 0; k < 17; k++)
		{
			lngSuma= lngSuma + ((intFactor[k]) * (18 - k));
		}
		
		lngDigito= (10 - (lngSuma % 10));
		
		if(lngDigito==10)
		{
			lngDigito=0;
		}

		return lngDigito;
	};

	return modulo;
}());


