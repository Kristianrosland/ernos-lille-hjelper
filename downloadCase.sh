name="case"

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

                 
state="s${tre}s ${to}y${fireU} s${enU}${TOP}       ${R}${fireR}s ${femR}rr ${DR}rr       s${enL}${L} bb${femL}  bb${DL}                           wwwwwwwww ooooooooo gggggggg"
# state="sss sys sss       sss srr srr       sss bbs  bbs                           wwwwwwwww ooooooooo gggggggg"
# state="sss sys sss       sss srr srr       sss bbs  bbs                           wwwwwwwww ooooooooo gggggggg"
# state="sss sys sss       sss srr srr       sss bbs  bbs                           wwwwwwwww ooooooooo gggggggg"
# state="sss sys sss       sss srr srr       sss bbs  bbs                           wwwwwwwww ooooooooo gggggggg"
# state="sss sys sss       sss srr srr       sss bbs  bbs                           wwwwwwwww ooooooooo gggggggg"
# state="sss sys sss       sss srr srr       sss bbs  bbs                           wwwwwwwww ooooooooo gggggggg"
# state="sss sys sss       sss srr srr       sss bbs  bbs                           wwwwwwwww ooooooooo gggggggg"
# state="sss sys sss       sss srr srr       sss bbs  bbs                           wwwwwwwww ooooooooo gggggggg"

url="http://cube.crider.co.uk/visualcube.php/?fmt=svg&size=300&fc=${state// /}"
echo $url

curl $url > "public/cases/${name}.svg"

