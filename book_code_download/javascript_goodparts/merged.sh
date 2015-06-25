for file in $(find . -name \*.txt) ; do  	
	echo $file >> merged.js;  	
	cat $file >> merged.js ;  	
	echo >> merged.js; 	
	echo >> merged.js; 	
	echo >> merged.js; 
done; 
