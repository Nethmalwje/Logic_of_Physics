import React from 'react'
import image from './images/propic.jpg'

import './about.css'


const About = () => {
  return (
    <div style={{backgroundImage: `  url(https://t4.ftcdn.net/jpg/04/31/44/89/360_F_431448941_oo9a7gWADWwWjyYBDmdcYvuIZdss3sxh.jpg)`, backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className='flex items-center  gap-x-[30px] pl-[40px] h-screen'>
        <div className='details w-1/2 font-bold'>

            <div className='text-xl mb-4 text-white '> Stress වෙලා ද ඉන්නෙ? Exam එක ගැන දැන්මම බයයි වගේ ද? </div>
           
            <div   className='text-2xl text-[#c744f2] mb-[40px]'>"Exam එකට ඉගෙන ගන්න එපා. ආසාවට ඉගෙන ගන්න. එතකොට Exam එක Pass වෙන්න පුලුවන්." </div>


            <div  className='text-white '>අපිට ඕනෙ Exam එක ජීවිතේම කරගත්‍ත, පාඩම් කරලම මූණු කලු කරගත්ත, බයටම Stress වෙච්ච, Exam එක ලං වෙද්දි පිස්සු හැදෙන, කතාකරන Robo ලා ටිකක් හදන්න නෙවේ. අපිට ඕනෙ හිනාවෙලා ආසාවෙන් ලෝකය දිහා බලන, ඇයි මේ දේවල් මෙහෙම වෙන්නෙ කියලා හිතන, මේවා මෙහෙම වෙන්න බැරිද කියලා කල්පනා කරන කොල්ලො කෙල්ලෝ ටිකක් හදන්න.

Physics කියන්නේ පොතක් බලාගෙන, ඒකම ලියාගෙන, ඒකම පාඩම් කරගෙන ගිහිං විභාගෙදි ලියල එන විෂයක් නෙවේ. ජීවිතේ අපිට හම්බෙන හැම දෙයක් ම Physics. කොටින්ම කියනව නම් ඔයා දැන් ඉඳගෙන ඉන්න පුටුව, ඔයා මේ video එක බලන phone එක නැත්නම් computer එක, ඔයාගෙ කාමරේ මේ වෙලාවෙත් පත්තුවෙන බල්බ් එක මේ හැමදේම Physics. 
මේ අවුරුදු දෙක හමාරක syllabus එක ඇතුලේ ඔයාට පුලුවන් පේන, ඇහෙන, දැනෙන හැම දෙයක් ම ඇයි එහෙම වෙන්නෙ කියලා කල්පනා කරන්න. ඒක තමයි Logic of Physics. 

දැන් වෙලාව රෑ 8.00 යි. මේ මුළු Hall එකම හිස්. හැබැයි හෙට උදේම ආයෙත් ඔයාලා වගේම නංගිලා මල්ලිලා ටිකක් එනවා, ආසාවට Physics ඉගෙන ගන්න.

ඔයත් ආසාවට Physics ඉගෙන ගන්න කැමති කෙනෙක් නම් එන්න. හොඳ Result එකක් ගන්න විදිහ මං කියලා දෙන්නම්. 

Stress නැති කරන අපේ Physics පංතිය
Logic of Physics තුසිත් හේරත්

Physics කියන්නෙම මිනිස්සු ආතල් එකට කරන සෙල්ලමක් ❤</div>
            
           



</div>
        <div className='imagecontainer shadow-lg h-full w-1/2'>
            <img className='shadow-lg h-full  w-full object-cover' src={image} alt="propic" />
        </div>
        
      
    </div>
  )
}

export default About
