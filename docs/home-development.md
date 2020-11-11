---
id: home-development
title: Development
sidebar_label: Development
custom_edit_url: null
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ReactPlayer from 'react-player'

### Tabs

<Tabs
defaultValue="worksheet"
values={[
{label: 'Worksheet', value: 'worksheet'},
{label: 'Answers', value: 'answers'},
]}>
<TabItem value="worksheet">
Worksheet tab
</TabItem>
<TabItem value="answers">
Answers tab
</TabItem>
</Tabs>

### Video Player

<ReactPlayer 
  url='https://youtu.be/IvUU8joBb1Q?t=30'
  width='640px'
  height='360px'
  controls = {true}
/>

### Local Video Player

<ReactPlayer
  url= '/video/Rabbit.mp4'
  width='640px'
  height='360px'
  controls = {true}
/>

### Local Audio Player 1/2

<ReactPlayer
  url='/audio/On a Cloud.mp3'
  width='320px'
  height='40px'
  controls = {true}
/>

### Local Audio Player Full-width

<ReactPlayer
  url='/audio/On a Cloud.mp3'
  width='640px'
  height='40px'
  controls = {true}
/>
