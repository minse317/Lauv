import * as S from './Song.module';
import {faPlay, faForward} from '@fortawesome/free-solid-svg-icons';

export default function Song() {
  return (
    <div>
      <S.BoxContainer>
        <S.Box>
          <S.LeftContainer>
            <S.Ig/>
            <S.IconContainer>
              <S.LeftIcon icon = {faForward} />
              <S.CenterIcon icon={faPlay} />
              <S.RightIcon icon = {faForward} />
            </S.IconContainer>
          </S.LeftContainer>
          <h1>title</h1>
        </S.Box>
        <S.Box/>
      </S.BoxContainer>
    </div>
  )
}
