import classnames from "classnames"
import {PVImage} from "~/components"
import type {NowPlayingItem} from "podverse-shared"
import { PV } from '~/resources'
import { useTranslation } from 'react-i18next'

type Props = {
  nowPlayingItem: NowPlayingItem
}

export const PlayerItemInfo = ({nowPlayingItem}: Props) => {
  const { t } = useTranslation()
  const container = classnames(
    "player-item-info-container"
)
const textContainer = classnames(
  "player-item-info-text-container"
)

  return (
    <div className={container}>
      <PVImage
                  alt={t('Podcast artwork')}
                  height={PV.Images.sizes.medium}
                  width={PV.Images.sizes.medium}
                  src={nowPlayingItem.episodeImageUrl || nowPlayingItem.podcastImageUrl}
                   />
      <div className={textContainer}>
        <div className="item-info-title">{nowPlayingItem.episodeTitle}</div>
        <div className="item-info-subtitle">{nowPlayingItem.podcastTitle}</div>
      </div>
    </div>
  )
}
