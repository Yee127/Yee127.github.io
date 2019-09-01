{\rtf1\ansi\ansicpg936\cocoartf2505
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Bold;\f1\fnil\fcharset0 Menlo-Regular;\f2\fnil\fcharset134 PingFangSC-Regular;
\f3\fnil\fcharset0 AppleColorEmoji;\f4\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red20\green20\blue20;\red244\green244\blue244;\red12\green107\blue255;
\red234\green40\blue46;}
{\*\expandedcolortbl;;\cssrgb\c10196\c10196\c10196;\cssrgb\c96471\c96471\c96471;\cssrgb\c0\c51765\c100000;
\cssrgb\c94510\c25098\c23529;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl260\partightenfactor0

\f0\b\fs21\fsmilli10800 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 var
\f1\b0  a_idx 
\f0\b =
\f1\b0  \cf4 \strokec4 0\cf2 \strokec2 ;\
jQuery(\cf4 \strokec4 document\cf2 \strokec2 ).ready(
\f0\b function
\f1\b0 ($) \{\
    $(\cf5 \strokec5 "body"\cf2 \strokec2 ).click(
\f0\b function
\f1\b0 (e) \{\
        
\f0\b var
\f1\b0  a 
\f0\b =
\f1\b0  
\f0\b new
\f1\b0  \cf4 \strokec4 Array\cf2 \strokec2 \
        (\cf5 \strokec5 \'93
\f2 \'d6\'ed\'d6\'ed\'c4\'c8
\f1 \'94\cf2 \strokec2 , \cf5 \strokec5 \'93
\f3 \uc0\u55357 \u56342 
\f1 \'94\cf2 \strokec2 , \cf5 \strokec5 \'93
\f3 \uc0\u55357 \u56375 
\f1 \'94\cf2 \strokec2 );\
        
\f0\b var
\f1\b0  $i 
\f0\b =
\f1\b0  $(\cf5 \strokec5 "<span/>"\cf2 \strokec2 ).text(a[a_idx]);\
        a_idx 
\f0\b =
\f1\b0  (a_idx 
\f0\b +
\f1\b0  \cf4 \strokec4 1\cf2 \strokec2 ) 
\f0\b %
\f1\b0  a.length;\
        
\f0\b var
\f1\b0  x 
\f0\b =
\f1\b0  e.pageX,\
        y 
\f0\b =
\f1\b0  e.pageY;\
        $i.css(\{\
            \cf5 \strokec5 "z-index"
\f0\b \cf2 \strokec2 :
\f1\b0  \cf4 \strokec4 5\cf2 \strokec2 ,\
            \cf5 \strokec5 "top"
\f0\b \cf2 \strokec2 :
\f1\b0  y 
\f0\b -
\f1\b0  \cf4 \strokec4 20\cf2 \strokec2 ,\
            \cf5 \strokec5 "left"
\f0\b \cf2 \strokec2 :
\f1\b0  x,\
            \cf5 \strokec5 "position"
\f0\b \cf2 \strokec2 :
\f1\b0  \cf5 \strokec5 "absolute"\cf2 \strokec2 ,\
            \cf5 \strokec5 "font-weight"
\f0\b \cf2 \strokec2 :
\f1\b0  \cf5 \strokec5 "bold"\cf2 \strokec2 ,\
            \cf5 \strokec5 "color"
\f0\b \cf2 \strokec2 :
\f1\b0  \cf5 \strokec5 "#FF0000"\cf2 \strokec2 \
        \});\
        $(\cf5 \strokec5 "body"\cf2 \strokec2 ).append($i);\
        $i.animate(\{\
            \cf5 \strokec5 "top"
\f0\b \cf2 \strokec2 :
\f1\b0  y 
\f0\b -
\f1\b0  \cf4 \strokec4 180\cf2 \strokec2 ,\
            \cf5 \strokec5 "opacity"
\f0\b \cf2 \strokec2 :
\f1\b0  \cf4 \strokec4 0\cf2 \strokec2 \
        \},\
            \cf4 \strokec4 3000\cf2 \strokec2 ,\
            
\f0\b function
\f1\b0 () \{\
                $i.remove();\
            \});\
    \});\
    setTimeout(\cf5 \strokec5 'delay()'\cf2 \strokec2 , \cf4 \strokec4 2000\cf2 \strokec2 );\
\});\
\

\f0\b function
\f1\b0  delay() \{\
    $(\cf5 \strokec5 ".buryit"\cf2 \strokec2 ).removeAttr(\cf5 \strokec5 "onclick"\cf2 \strokec2 );\
\}
\f4 \
}