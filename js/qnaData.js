/*
gryffindor: 0
hufflepuff: 1
ravenclaw: 2
slytherin: 3
*/

const qnaList = [
    {
        q: '1. 하나의 신분을 골라야 한다면, 당신의 선택은?',
        a: [
            { answer: 'a. 국왕', type: 3 },
            { answer: 'b. 검객', type: 0 },
            { answer: 'c. 학자', type: 2 },
            { answer: 'd. 평범한 일반인', type: 1 }
        ]
    },
    {
        q: '2. 가장 받고 싶은 생일 선물은?',
        a: [
            { answer: 'a. 책', type: 2 },
            { answer: 'b. 제빵 도구', type: 1 },
            { answer: 'c. 스케이트 보드', type: 0 },
            { answer: 'd. 보석, 장신구', type: 3 }
        ]
    },
    {
        q: '3. 소규모 토론을 할 때, 당신의 역할은?',
        a: [
            { answer: 'a. 앞장서 의견을 내는 사람', type: 0 },
            { answer: 'b. 사람들의 말에 보충되는 의견을 내는 사람', type: 2 },
            { answer: 'c. 의견들을 종합하는 사람', type: 3 },
            { answer: 'd. 경청하는 사람', type: 1 }
        ]
    },
    {
        q: '4. 인사만 하는 사람이 도움을 요청할 때, 당신의 태도는?',
        a: [
            { answer: 'a. 만약 그 사람이 도움에 걸맞는 보상을 한다면 돕고, 그렇지 않다면 돕지 않는다.', type: 3 },
            { answer: 'b. 앞뒤 가리지 않고 나서서 돕는다.', type: 0 },
            { answer: 'c. 문제 분석을 도와주고 해결 방안을 제시한다.', type: 2 },
            { answer: 'd. 그 사람을 도울 다른 사람을 찾아준다.', type: 1 }
        ]
    },
    {
        q: '5. 가장 좋아하는 활동은?',
        a: [
            { answer: 'a. 방 탈출 게임', type: 0 },
            { answer: 'b. 컴퓨터 게임', type: 3 },
            { answer: 'c. 독서', type: 2 },
            { answer: 'd. 애완동물 먹이 주기', type: 1 }
        ]
    },
    {
        q: '6. 가장 좋아하는 영화 장르는?',
        a: [
            { answer: 'a. 스릴/호러', type: 0 },
            { answer: 'b. 액션/모험', type: 3 },
            { answer: 'c. 다큐멘터리', type: 2 },
            { answer: 'd. 코미디', type: 1 }
        ]
    },
    {
        q: '7. 당신이 가장 좋아하는 장소는?',
        a: [
            { answer: 'a. 도서관', type: 2 },
            { answer: 'b. 주방', type: 1 },
            { answer: 'c. 롤러코스터', type: 0 },
            { answer: 'd. 전쟁터', type: 3 }
        ]
    },
    {
        q: '8. 힘든 프로젝트를 배정 받았을 때, 당신의 태도는?',
        a: [
            { answer: 'a. 최소한의 일만 하고 넘긴다', type: 0 },
            { answer: 'b. 아픈 척 하고 쉰다', type: 3 },
            { answer: 'c. 나에게 주어진 물건과 자원을 활용하여 최대한 덜 힘들게 한다', type: 2 },
            { answer: 'd. 열심히 혼자 해낸다', type: 1 }
        ]
    },
    {
        q: '9. 가장 좋아하는 선생님 유형은?',
        a: [
            { answer: 'a. 수업 시간 외에 학생들을 데리고 나가 함께 탐험하는 용감한 선생님', type: 0 },
            { answer: 'b. 모든 학생들이 우러러 보는 권위있는 선생님', type: 3 },
            { answer: 'c. 걸어다니는 백과사전 같은 똑똑한 선생님', type: 2 },
            { answer: 'd. 손재주가 좋아 학생들에게 핸드메이드 간식을 나눠주는 선생님', type: 1 }
        ]
    },
    {
        q: '10. 가장 좋아하는 거주 환경은?',
        a: [
            { answer: 'a. 숲 속의 통나무 집', type: 0 },
            { answer: 'b. 아름답게 장식이 꾸며져 있는 집', type: 3 },
            { answer: 'c. 거대한 서재가 있는 집', type: 2 },
            { answer: 'd. 정원이 있는 작은 집', type: 1 }
        ]
    },
    {
        q: '11. 가장 좋아하는 친구 유형은?',
        a: [
            { answer: 'a. 조금 칠칠맞고 충동적이지만 용감하고 의리있는 친구', type: 0 },
            { answer: 'b. 권위적이고 배려가 부족하지만 자주 유용한 조언을 해주는 친구', type: 3 },
            { answer: 'c. 항상 기발한 생각을 하지만 비정상적이라고 느끼게 하는 친구', type: 2 },
            { answer: 'd. 남을 대하는 법은 잘 모르지만 정직하고 친절한 친구', type: 1 }
        ]
    },
    {
        q: '12. 가장 중요하게 생각하는 것은?',
        a: [
            { answer: 'a. 명예', type: 0 },
            { answer: 'b. 힘', type: 3 },
            { answer: 'c. 지혜', type: 2 },
            { answer: 'd. 사랑', type: 1 }
        ]
    }
]