---
id: periodicity-taxonomy
title: taxonomy
sidebar_label: taxonomy
custom_edit_url: null
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VideoPlayer from "../src/components/VideoPlayer";
import ReactAudioPlayer from 'react-audio-player';

<Tabs
defaultValue="worksheet"
values={[
{label: 'Worksheet', value: 'worksheet'},
{label: 'Answers', value: 'answers'},
]}>
<TabItem value="worksheet">Worksheet tab</TabItem>
<TabItem value="answers">Answers tab</TabItem>
</Tabs>


### Video Player
<VideoPlayer
    url='https://youtu.be/J0w0t4Qn6LY?t=2053'
/>

### Audio Player
<ReactAudioPlayer
  src="../static/audio/22. Across the Violet Sky.mp3"
  controls
/>