/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-01 23:48:47
 * @version $Id$
 */
var i=0;
function timedCount(){
	i=i+1;
	postMessage(i);
	setTimeout("timedCount()",500);
}
timedCount();
