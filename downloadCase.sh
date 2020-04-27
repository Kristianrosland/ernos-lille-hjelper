name="case"

LS="g"
RS="o"

R="s"
L="s"
TOP="s"

enU="s"
enL="s"

fireU="s"
fireR="s"

to="s"
tre="s"

femL="s"
femR="s"
DL="s"
DR="s"




state="s${tre}s ${to}y${fireU} s${enU}${TOP}       ${R}${fireR}s ${femR}${RS}${RS} ${DR}${RS}${RS}       s${enL}${L} ${LS}${LS}${femL}  ${LS}${LS}${DL}                           wwwwwwwww ooooooooo gggggggg"

url="http://cube.crider.co.uk/visualcube.php/?fmt=svg&size=300&fc=${state// /}"
echo $url

curl $url > "public/cases/${name}.svg"

