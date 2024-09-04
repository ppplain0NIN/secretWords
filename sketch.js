// Get the overall volume (between 0 and 1.0)

let slider;
let mic;


let wordsArray = [
  
  // 01
  [
    "OnAPitch-blackNight, ",
    "칠흑같은밤",  
    "Jess,WearingASimplePurpleDressInFrontOfAShallowLake,StaresDownAtHerSubmergedFeetAsIfHerAnklesWereAboutToSink",
    "얕은 호수 앞에서 소박한 보라색 드레스를 입은 제스는 잠길 듯 말 듯 물에 담긴 자신의 발을 내려다본다. ",
    "There is a small wave above her feet",
    "그녀의 발 위에 작은 파도가 있다.",
    "She raises her head and looks forward",
    "그녀는 고개를 들고 앞을 본다",
    "The blue light at dawn briefly passes by her face. She looks at her feet again.",
    "새벽의 푸른 빛이 잠시 그녀의 얼굴을 스쳐간다",
    "What's this sound? ",
    "이게 무슨 소리죠?",
    "The breathing sound of a running woman continues to linger in Jess' ears.",
    "달리는 여자의 숨소리가 제스의 귀에 계속 맴돈다",
    "Water... the shallow black water. ",
    "물... 얕은 검은 물",
    "She can see pebbles under the water",
    "그녀는 물속에서 조약돌을 볼 수 있다",
    "The pebbles are sinking, as the water gets deeper",
    "물이 깊어질수록 조약돌이 가라앉고 있다",
    "As the pebbles gradually descend, her gaze also sinks with them. ",
    "조약돌이 점점 아래로 내려가자 그녀의 시선도 조약돌과 함께 내려앉는다",
    "Jess slowly descends into the water along with the gravel, feeling that the breathing sound is getting closer. She closes her eyes slowly",
    "제스는 숨소리가 가까워지는 것을 느끼며 자갈길을 따라 천천히 물 속으로 내려간다",
    "The sound of breathing is in her ears. She descends to a place where the source of the breathing sound is originating from her mind. .",
    "그녀는 눈을 천천히 감는다. 그녀의 귀에 숨소리가 들려요. ",
    "Descending. In the water, Jess is slowly sinking into a deep abyss.",
    "물 속에서 제스는 천천히 깊은 심연 속으로 가라앉고 있다",
     "OnAPitch-blackNight, ",
    "칠흑같은밤", 
        "the words of the lover again,",
    "다시 사랑하는 사람의 말",
    "the hyacinth, ",
    "히아신스",
    "and countless people are intertwined and intertwined, and they are combined into a large clumped vibration.",
    "수많은 사람들이 서로 얽히고 설켜서 커다란 덩어리진 진동으로 합쳐지는 것을 수없이 들을 수 있다",
  ],
  
  
  //02
  [
    "A woman is running through the branches of a forest. ",
    "여자가 숲의 가지들 사이를 달리고 있다",
    "Alicia runs through the forest with regular but intense breaths.",
    "규칙적이지만 강렬한 호흡으로 숲을 달린다",
    "She exits the forest and climbs up to a track.",
    "그녀는 숲을 빠져나와 트랙으로 올라간다",
    "She runs downhill.",
    "그녀는 내리막길을 달린다.",
    "She sees a woman walking along the coast far away.",
    "그녀는 멀리 해안을 따라 걷고 있는 한 여자를 본다",
    "Jess continues to sink into the water. ",
    "제스는 계속해서 물 속으로 가라앉는다",
    "She can hear the sound of deep breathing abruptly ceasing and reaching for silence.",
    "녀는 깊은 숨소리가 갑자기 멈추었다가 침묵을 향해 손을 뻗는 것을 들을 수 있다",
    "The sky unfolds behind Kate as she climbs a rock wall",
    "케이트가 암벽을 오르자 그녀 뒤로 하늘이 펼쳐진다",
    "She doesn't remember how high she’s climbed. ",
    "그녀는 자신이 얼마나 높이 올랐는지 기억하지 못한다",
    "Many thoughts dominate her brain",
    "많은 생각들이 그녀의 뇌를 지배한다",
    "She is thinking of him",
    "그녀는 그를 생각하고 있다",
    "The words he said come to her mind.",
    "그가 한 말이 떠오른다",
    "She doesn't want to think.",
    "그녀는 생각하고 싶지 않다",
    "But she constantly thinks of it.",
    "하지만 그녀는 끊임없이 그것을 생각한다",
    "A woman is running through the branches of a forest. ",
    "여자가 숲의 가지들 사이를 달리고 있다",
    "and it sounds like breathing.",
    "마치 호흡하는 것처럼 들린다",
    "She lies on her bed and falls asleep slowly. ",
    "그녀는 침대에 누워 천천히 잠이 든다.",
    "her eyes are locked.",
    "그녀의 눈은 잠겨 있다",
  ],
  
  
  //03
  [
    "All the details of everyday life are constantly played back and forth in her brain. ",
    "일상 생활의 모든 세부 사항들이 그녀의 뇌 속에서 끊임없이 재생된다",
    "What the coffee shop clerk said in the morning, the unusually pale-faced florist who she stopped by, on her way to visit her mother on her way home from work.",
    "아침에 커피숍 점원이 한 말은, 퇴근길에 어머니를 뵈러 가는 길에 들렀던 유난히 창백한 얼굴의 꽃집 아저씨였다.",
    "Hyacinths.",
    "히아신스",
    "Buy hyacinths and head to her mother's house.",
    "히아신스를 사서 그녀의 어머니 집으로 향하세요",
    "On the way home, she can hear young lovers talking on the subway. ",
    "집에 오는 길에, 그녀는 지하철에서 젊은 연인들이 이야기하는 것을 들을 수 있습니다",
    "She gets off of the subway and walks home.",
    "그녀는 지하철에서 내려 집으로 걸어간다",
    "The young lovers' words continue to be heard in her mind.",
    "젊은 연인들의 말이 그녀의 마음속에서 계속 들려오고 있다",
    "She can see a convenience store.",
    "그녀는 편의점을 볼 수 있다",
    "The words of the old man from the convenience store intermingle with the words of the lovers for a while.",
    "편의점에서 나온 노인의 말이 잠시 연인들의 말과 뒤섞인다",
    "An indoor rock climbing practice range unfolds behind Kate as she climbs a rock wall.",
    "케이트가 암벽을 오르자 실내 암벽 등반 연습장이 뒤로 펼쳐진다",
   "the words of the lover again,",
    "다시 사랑하는 사람의 말",
    "the hyacinth, ",
    "히아신스",
    "and countless people are intertwined and intertwined, and they are combined into a large clumped vibration.",
    "수많은 사람들이 서로 얽히고 설켜서 커다란 덩어리진 진동으로 합쳐지는 것을 수없이 들을 수 있다",
    "and it sounds like breathing.",
    "마치 호흡하는 것처럼 들린다",
    "She lies on her bed and falls asleep slowly. ",
    "그녀는 침대에 누워 천천히 잠이 든다.",
    "He doesn't think she's listening to him.",
    "그는 그녀가 그의 말을 듣고 있다고 생각하지 않는다",
    "He talks more and more over and over again,",
    "그는 점점 더 말을 반복하지만,",
    "but his words bounce out in front of her and pour back into him,",
    "그의 말은 그녀 앞에서 튀어 나와 다시 그에게 쏟아지면서",
  ],
  
  //04
  [
    "She can hear them continuously: ",
    "그녀는 들을 수 있다",
    "the words of the subway lovers,",
    "지하철 사랑하는 사람들의 말",
    "the words of the florist,",
    "꽃집 주인의 말",
    "the words of the old man,",
    "노인의 말",
    "the words of the mother,",
    "어머니의 말",
    "the words of the lover again,",
    "다시 사랑하는 사람의 말",
    "the hyacinth, ",
    "히아신스",
    "and countless people are intertwined and intertwined, and they are combined into a large clumped vibration.",
    "수많은 사람들이 서로 얽히고 설켜서 커다란 덩어리진 진동으로 합쳐지는 것을 수없이 들을 수 있다",
    "and it sounds like breathing.",
    "마치 호흡하는 것처럼 들린다",
    "She lies on her bed and falls asleep slowly. ",
    "그녀는 침대에 누워 천천히 잠이 든다.",
    "He looks at Kate. Kate looks at him.",
    "그는 케이트를 쳐다본다. 케이트는 그를 쳐다본다.",
    "He talks constantly.",
    "그는 말이 끊이지 않는다",
    "She looks at the coffee cup in front of him. ",
    "그녀는 그의 앞에 있는 커피잔을 바라본다",
    "The coffee in the cup...",
    "컵에 있는 커피는...",
    "a pool of black water, into the water... ",
    "검은 물의 웅덩이, 물속으로...",
    "filling all the space around and besides her.",
    "그녀 주변과 그녀 외의 모든 공간을 채운다",
    "Behind him,",
    "그의 뒤로",
    "her gaze follows the leisurely coast.",
    "그녀의 시선이 한가로운 해안을 따라간다",
  ],
  
  //05
  [
    "She falls asleep,",
    "정말 최고의 시간들 이었어요.",
    "taking countless words that she can't escape with her as a regular beat.",
    "피할 수 없는 수많은 말들을 규칙적인 박자로 받아들이며 잠이 든다",
    "Alicia, who runs with regular breaths,",
    "규칙적인 호흡으로 달리는 앨리샤가",
    "heads toward the beach in the cool dawn breeze.",
    "시원한 새벽바람을 맞으며 해변으로 향한다",
    "A coastal cafe in the afternoon filled with warm sunlight.",
    "따스한 햇살이 가득한 오후의 해안 카페",
    "He looks at Kate. Kate looks at him.",
    "그는 케이트를 쳐다본다. 케이트는 그를 쳐다본다.",
    "He talks constantly.",
    "그는 말이 끊이지 않는다",
    "She looks at the coffee cup in front of him. ",
    "그녀는 그의 앞에 있는 커피잔을 바라본다",
    "The coffee in the cup...",
    "컵에 있는 커피는...",
    "a pool of black water, into the water... ",
    "검은 물의 웅덩이, 물속으로...",
       "She falls asleep,",
    "정말 최고의 시간들 이었어요.",
    "taking countless words that she can't escape with her as a regular beat.",
    "피할 수 없는 수많은 말들을 규칙적인 박자로 받아들이며 잠이 든다",
    "Alicia, who runs with regular breaths,",
    "규칙적인 호흡으로 달리는 앨리샤가",
    "heads toward the beach in the cool dawn breeze.",
    "시원한 새벽바람을 맞으며 해변으로 향한다",
    "A coastal cafe in the afternoon filled with warm sunlight.",
    "따스한 햇살이 가득한 오후의 해안 카페",
    "Her gaze stops as she reaches people enjoying a small party on a boat.",
    "보트를 타고 작은 파티를 즐기는 사람들에게 다가가는 그녀의 시선이 멈춘다",
    "Sparkling light from the boat makes her eyes sting. ",
    "보트에서 반짝이는 빛이 그녀의 눈을 따갑게 한다",
    "The sound of his words is mixed with the words of the flower shop clerk and the words of the subway lovers.",
    "의 말소리에는 꽃집 점원의 말소리와 지하철 애호가들의 말소리가 섞여 있다",
  ],
  
  //06
  [
    "her eyes are locked.",
    "그녀의 눈은 잠겨 있다",
    "He doesn't think she's listening to him.",
    "그는 그녀가 그의 말을 듣고 있다고 생각하지 않는다",
    "He talks more and more over and over again,",
    "그는 점점 더 말을 반복하지만,",
    "but his words bounce out in front of her and pour back into him,",
    "그의 말은 그녀 앞에서 튀어 나와 다시 그에게 쏟아지면서",
    "filling all the space around and besides her.",
    "그녀 주변과 그녀 외의 모든 공간을 채운다",
    "Behind him,",
    "그의 뒤로",
    "her gaze follows the leisurely coast.",
    "그녀의 시선이 한가로운 해안을 따라간다",
    "Her gaze stops as she reaches people enjoying a small party on a boat.",
    "보트를 타고 작은 파티를 즐기는 사람들에게 다가가는 그녀의 시선이 멈춘다",
    "Sparkling light from the boat makes her eyes sting. ",
    "보트에서 반짝이는 빛이 그녀의 눈을 따갑게 한다",
    "The sound of his words is mixed with the words of the flower shop clerk and the words of the subway lovers.",
    "의 말소리에는 꽃집 점원의 말소리와 지하철 애호가들의 말소리가 섞여 있다",
    "She falls asleep,",
    "정말 최고의 시간들 이었어요.",
    "taking countless words that she can't escape with her as a regular beat.",
    "피할 수 없는 수많은 말들을 규칙적인 박자로 받아들이며 잠이 든다",
    "Alicia, who runs with regular breaths,",
    "규칙적인 호흡으로 달리는 앨리샤가",
    "heads toward the beach in the cool dawn breeze.",
    "시원한 새벽바람을 맞으며 해변으로 향한다",
    "A coastal cafe in the afternoon filled with warm sunlight.",
    "따스한 햇살이 가득한 오후의 해안 카페",
    "Kate stares at the empty front seat.",
    "케이트는 텅 빈 앞자리를 응시한다",
    "She thinks of a puddle of water in a coffee cup of the past on an empty table.",
    "그녀는 빈 테이블 위에 놓인 과거의 커피잔에 담긴 물웅덩이를 생각한다",
    "Alicia stands on the boat smiling as if enjoying the people around her but glances at her husband sitting with a strange woman on a sunbed.",
    "앨리샤는 배 위에 서서 주위 사람들을 즐겁게 하는 듯 웃고 있지만 선베드에 낯선 여자와 앉아 있는 남편을 힐끗 쳐다본다",
  ],
  
  //07
  [
    "Kate stares at the empty front seat.",
    "케이트는 텅 빈 앞자리를 응시한다",
    "She thinks of a puddle of water in a coffee cup of the past on an empty table.",
    "그녀는 빈 테이블 위에 놓인 과거의 커피잔에 담긴 물웅덩이를 생각한다",
    "Alicia stands on the boat smiling as if enjoying the people around her but glances at her husband sitting with a strange woman on a sunbed.",
    "앨리샤는 배 위에 서서 주위 사람들을 즐겁게 하는 듯 웃고 있지만 선베드에 낯선 여자와 앉아 있는 남편을 힐끗 쳐다본다",
    "The woman holds a mirror and touches her hair.",
    "여자가 거울을 들고 머리를 만진다",
    "The sunlight is reflected by the mirror light and sparkles toward the coast.",
    "햇빛은 거울 빛에 반사되어 해안을 향해 반짝인다",
    "Kate opens her eyes and quickly wakes up as though she were escaping from another world.",
    "케이트는 마치 다른 세계에서 탈출하는 것처럼 눈을 뜨고 재빨리 잠에서 깨어난다",
    "The vibrations of the numerous chunks of noise that bother her grow louder and louder and louder.",
    "그녀를 괴롭히는 수많은 소음 덩어리들의 진동이 점점 더 커지고 있다",
    "She looks outside the window at the coast and decides to go for a walk.",
    "그녀는 창밖의 해안을 바라보며 산책을 하기로 결심한다",
    "At dawn, when the light is still dim,",
    "아직도 불빛이 희미한 새벽녘,",
    "Kate walks along the coast where there is no one.",
    "케이트는 아무도 없는 해안을 따라 걷는다",
    "She can hear them continuously: ",
    "그녀는 들을 수 있다",
    "the words of the subway lovers,",
    "지하철 사랑하는 사람들의 말",
    "the words of the florist,",
    "꽃집 주인의 말",
    "the words of the old man,",
    "노인의 말",
    "the words of the mother,",
    "어머니의 말",
    "The woman holds a mirror and touches her hair.",
    "여자가 거울을 들고 머리를 만진다",
    "The sunlight is reflected by the mirror light and sparkles toward the coast.",
    "햇빛은 거울 빛에 반사되어 해안을 향해 반짝인다",
    "Kate opens her eyes and quickly wakes up as though she were escaping from another world.",
    "케이트는 마치 다른 세계에서 탈출하는 것처럼 눈을 뜨고 재빨리 잠에서 깨어난다",
  ],
  
   // 08
  [
    "OnAPitch-blackNight, ",
    "칠흑같은밤",
    "Jess,WearingASimplePurpleDressInFrontOfAShallowLake,StaresDownAtHerSubmergedFeetAsIfHerAnklesWereAboutToSink",
    "얕은 호수 앞에서 소박한 보라색 드레스를 입은 제스는 잠길 듯 말 듯 물에 담긴 자신의 발을 내려다본다. ",
    "There is a small wave above her feet",
    "그녀의 발 위에 작은 파도가 있다.",
    "She raises her head and looks forward",
    "그녀는 고개를 들고 앞을 본다",
    "The blue light at dawn briefly passes by her face. She looks at her feet again.",
    "새벽의 푸른 빛이 잠시 그녀의 얼굴을 스쳐간다",
    "What's this sound? ",
    "이게 무슨 소리죠?",
    "The breathing sound of a running woman continues to linger in Jess' ears.",
    "달리는 여자의 숨소리가 제스의 귀에 계속 맴돈다",
    "Water... the shallow black water. ",
    "물... 얕은 검은 물",
    "She can see pebbles under the water",
    "그녀는 물속에서 조약돌을 볼 수 있다",
    "The pebbles are sinking, as the water gets deeper",
    "물이 깊어질수록 조약돌이 가라앉고 있다",
    "As the pebbles gradually descend, her gaze also sinks with them. ",
    "조약돌이 점점 아래로 내려가자 그녀의 시선도 조약돌과 함께 내려앉는다",
    "Jess slowly descends into the water along with the gravel, feeling that the breathing sound is getting closer. She closes her eyes slowly",
    "제스는 숨소리가 가까워지는 것을 느끼며 자갈길을 따라 천천히 물 속으로 내려간다",
    "The sound of breathing is in her ears. She descends to a place where the source of the breathing sound is originating from her mind. .",
    "그녀는 눈을 천천히 감는다. 그녀의 귀에 숨소리가 들려요. ",
    "Descending. In the water, Jess is slowly sinking into a deep abyss.",
    "물 속에서 제스는 천천히 깊은 심연 속으로 가라앉고 있다",
    "What's this sound? ",
    "이게 무슨 소리죠?",
    "The vibrations of the numerous chunks of noise that bother her grow louder and louder and louder.",
    "그녀를 괴롭히는 수많은 소음 덩어리들의 진동이 점점 더 커지고 있다",
    "She looks outside the window at the coast and decides to go for a walk.",
    "그녀는 창밖의 해안을 바라보며 산책을 하기로 결심한다",
    "At dawn, when the light is still dim,",
    "아직도 불빛이 희미한 새벽녘,",
  ],
  
  
  //09
  [
    "A woman is running through the branches of a forest. ",
    "여자가 숲의 가지들 사이를 달리고 있다",
    "Alicia runs through the forest with regular but intense breaths.",
    "규칙적이지만 강렬한 호흡으로 숲을 달린다",
    "She exits the forest and climbs up to a track.",
    "그녀는 숲을 빠져나와 트랙으로 올라간다",
    "She runs downhill.",
    "그녀는 내리막길을 달린다.",
    "She sees a woman walking along the coast far away.",
    "그녀는 멀리 해안을 따라 걷고 있는 한 여자를 본다",
    "Jess continues to sink into the water. ",
    "제스는 계속해서 물 속으로 가라앉는다",
    "She can hear the sound of deep breathing abruptly ceasing and reaching for silence.",
    "그녀는 깊은 숨소리가 갑자기 멈추었다가 침묵을 향해 손을 뻗는 것을 들을 수 있다",
    "The sky unfolds behind Kate as she climbs a rock wall",
    "케이트가 암벽을 오르자 그녀 뒤로 하늘이 펼쳐진다",
    "She doesn't remember how high she’s climbed. ",
    "그녀는 자신이 얼마나 높이 올랐는지 기억하지 못한다",
    "Many thoughts dominate her brain",
    "많은 생각들이 그녀의 뇌를 지배한다",
    "She is thinking of him",
    "그녀는 그를 생각하고 있다",
    "The words he said come to her mind.",
    "그가 한 말이 떠오른다",
    "She doesn't want to think.",
    "그녀는 생각하고 싶지 않다",
    "But she constantly thinks of it.",
    "하지만 그녀는 끊임없이 그것을 생각한다",
    "Jess continues to sink into the water. ",
    "제스는 계속해서 물 속으로 가라앉는다",
    "A woman is running through the branches of a forest. ",
    "여자가 숲의 가지들 사이를 달리고 있다",
    "Alicia runs through the forest with regular but intense breaths.",
    "규칙적이지만 강렬한 호흡으로 숲을 달린다",
    "She exits the forest and climbs up to a track.",
    "그녀는 숲을 빠져나와 트랙으로 올라간다",
  ],
  
  
  //10
  [
    "All the details of everyday life are constantly played back and forth in her brain. ",
    "일상 생활의 모든 세부 사항들이 그녀의 뇌 속에서 끊임없이 재생된다",
    "What the coffee shop clerk said in the morning, the unusually pale-faced florist who she stopped by, on her way to visit her mother on her way home from work.",
    "아침에 커피숍 점원이 한 말은, 퇴근길에 어머니를 뵈러 가는 길에 들렀던 유난히 창백한 얼굴의 꽃집 아저씨였다.",
    "Hyacinths.",
    "히아신스",
    "Buy hyacinths and head to her mother's house.",
    "히아신스를 사서 그녀의 어머니 집으로 향하세요",
    "On the way home, she can hear young lovers talking on the subway. ",
    "집에 오는 길에, 그녀는 지하철에서 젊은 연인들이 이야기하는 것을 들을 수 있습니다",
    "She gets off of the subway and walks home.",
    "그녀는 지하철에서 내려 집으로 걸어간다",
    "The young lovers' words continue to be heard in her mind.",
    "젊은 연인들의 말이 그녀의 마음속에서 계속 들려오고 있다",
    "She can see a convenience store.",
    "그녀는 편의점을 볼 수 있다",
    "The words of the old man from the convenience store intermingle with the words of the lovers for a while.",
    "편의점에서 나온 노인의 말이 잠시 연인들의 말과 뒤섞인다",
    "An indoor rock climbing practice range unfolds behind Kate as she climbs a rock wall.",
    "케이트가 암벽을 오르자 실내 암벽 등반 연습장이 뒤로 펼쳐진다",
    "Kate stares at the empty front seat.",
    "케이트는 텅 빈 앞자리를 응시한다",
    "She thinks of a puddle of water in a coffee cup of the past on an empty table.",
    "그녀는 빈 테이블 위에 놓인 과거의 커피잔에 담긴 물웅덩이를 생각한다",
    "Alicia stands on the boat smiling as if enjoying the people around her but glances at her husband sitting with a strange woman on a sunbed.",
    "앨리샤는 배 위에 서서 주위 사람들을 즐겁게 하는 듯 웃고 있지만 선베드에 낯선 여자와 앉아 있는 남편을 힐끗 쳐다본다",
    "The woman holds a mirror and touches her hair.",
    "여자가 거울을 들고 머리를 만진다",
    "The sunlight is reflected by the mirror light and sparkles toward the coast.",
    "햇빛은 거울 빛에 반사되어 해안을 향해 반짝인다",
    "Kate walks along the coast where there is no one.",
    "케이트는 아무도 없는 해안을 따라 걷는다",
    "She runs downhill.",
    "그녀는 내리막길을 달린다.",
    "She sees a woman walking along the coast far away.",
    "그녀는 멀리 해안을 따라 걷고 있는 한 여자를 본다",
  ],
 



  //11
  [
    "All the details of everyday life are constantly played back and forth in her brain. ",
    "일상 생활의 모든 세부 사항들이 그녀의 뇌 속에서 끊임없이 재생된다",
    "What the coffee shop clerk said in the morning, the unusually pale-faced florist who she stopped by, on her way to visit her mother on her way home from work.",
    "아침에 커피숍 점원이 한 말은, 퇴근길에 어머니를 뵈러 가는 길에 들렀던 유난히 창백한 얼굴의 꽃집 아저씨였다.",
    "Hyacinths.",
    "히아신스",
    "Buy hyacinths and head to her mother's house.",
    "히아신스를 사서 그녀의 어머니 집으로 향하세요",
    "On the way home, she can hear young lovers talking on the subway. ",
    "집에 오는 길에, 그녀는 지하철에서 젊은 연인들이 이야기하는 것을 들을 수 있습니다",
    "She gets off of the subway and walks home.",
    "그녀는 지하철에서 내려 집으로 걸어간다",
    "The young lovers' words continue to be heard in her mind.",
    "젊은 연인들의 말이 그녀의 마음속에서 계속 들려오고 있다",
    "She can see a convenience store.",
    "그녀는 편의점을 볼 수 있다",
    "The words of the old man from the convenience store intermingle with the words of the lovers for a while.",
    "편의점에서 나온 노인의 말이 잠시 연인들의 말과 뒤섞인다",
    "An indoor rock climbing practice range unfolds behind Kate as she climbs a rock wall.",
    "케이트가 암벽을 오르자 실내 암벽 등반 연습장이 뒤로 펼쳐진다",
   "the words of the lover again,",
    "다시 사랑하는 사람의 말",
    "the hyacinth, ",
    "히아신스",

    "Jess continues to sink into the water. ",
    "제스는 계속해서 물 속으로 가라앉는다",
    "She can hear the sound of deep breathing abruptly ceasing and reaching for silence.",
    "그녀는 깊은 숨소리가 갑자기 멈추었다가 침묵을 향해 손을 뻗는 것을 듣는다",
    "The sky unfolds behind Kate as she climbs a rock wall",
    "케이트가 암벽을 오르자 그녀 뒤로 하늘이 펼쳐진다",
    "She doesn't remember how high she’s climbed. ",
    "그녀는 자신이 얼마나 높이 올랐는지 기억하지 못한다",
    "Many thoughts dominate her brain",
    "많은 생각들이 그녀의 뇌를 지배한다",
    "She is thinking of him",
    "그녀는 그를 생각하고 있다",
    "The words he said come to her mind.",
    "그가 한 말이 떠오른다",
    "She doesn't want to think.",
    "그녀는 생각하고 싶지 않다",
    "But she constantly thinks of it.",
    "하지만 그녀는 끊임없이 그것을 생각한다",
  ],
];

let colorsArray = [[], [], [], [], [], [], [], [], [], [], []];

let verticalCount = 10;
let horizontalCount = 34;

let sourceText = "Life is short and art long";

function setup() {
  // Create an Audio input
  mic = new p5.AudioIn();

  mic.start();

  // createCanvas(windowWidth, windowHeight);
 createCanvas(1920, 1080);
  frameRate(10);
  for (let i = 0; i < verticalCount; i++) {
    for (let j = 0; j < horizontalCount; j++) {
      let c = color(random(50, 255), random(50, 255), random(50, 255));
      colorsArray[i][j] = c;
    }
  }

  let col = color(255, 23, 200);
  slider = createSlider(0, 360, 25);
  slider.position(300, 900);
  slider.style("width", "200px", "height", "2px");
}
function draw() {
 // background(50);
  //background(25);
  background(0);
  
  for (let j = 0; j < verticalCount; j++) {
    for (let i = 0; i < horizontalCount; i++) {
      fill(colorsArray[j][i]);
      noStroke();
      rect(25 + i * 60, 210 + j * 60, 9, 9);
      secretwords(
        30 + i * 60,
        210 + j * 60,
        10,
        colorsArray[j][i],
        wordsArray[j][i]
      );
    }
  }
}

function secretwords(x, y, TS, color, WORDS) {
  let vol = mic.getLevel();

  var LV;
  let val = slider.value();
  LV = map(val, 0, 100, 0, 5);

  let h = map(vol, 0, 1, 0, width * (LV / 2.5));

  fill(color);
  textSize(TS);
  text(WORDS);
  textAlign(CENTER, TOP);
  let middle = sourceText.length / 2;
  let left = middle - (h / width) * 10 * middle;
  let right = middle + (h / width) * 10 * middle;
  text(WORDS.substring(left, right + 0.8), x, y);
}
