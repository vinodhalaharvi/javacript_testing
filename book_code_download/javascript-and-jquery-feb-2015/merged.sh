for file in $(find . -name \*.js) ; do  	
	echo $file >> merged.txt;  	
	cat $file >> merged.txt ;  	
	echo >> merged.txt; 	
	echo >> merged.txt; 	
	echo >> merged.txt; 
done; 
