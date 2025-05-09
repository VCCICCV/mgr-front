const title = '锈化动力'
const url = 'https:145632.xyz'
const description = 'Web 3D营销平台,可靠、实用、省心'
const author = 'cci'
const twitter = '@cccccc'

export default function Head() {
    return (
        <>
            {/* 元标签 */}
            <meta charSet='utf-8' />
            <meta name='language' content='zh' />
            <meta httpEquiv='content-type' content='text/html' />
            <meta name='author' content={author} />
            <meta name='designer' content={author} />
            <meta name='publisher' content={author} />

            {/* 搜索引擎优化元标签 */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta
                name='keywords'
                content='Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist'
            />
            <meta name='robots' content='index,follow' />
            <meta name='distribution' content='web' />
            {/* Facebook Open Graph 元标签| documentation: https://developers.facebook.com/docs/sharing/opengraph */}
            <meta property='og:title' content={title} />
            <meta property='og:type' content='site' />
            <meta property='og:url' content={url} />
            <meta property='og:image' content={'/public/logo.svg'} />
            <meta property='og:site_name' content={title} />
            <meta property='og:description' content={description} />

            <link rel='apple-touch-icon' href='/public/logo.svg' />
            <link rel='apple-touch-icon' sizes='16x16' href='/public/logo.svg' />
            <link rel='apple-touch-icon' sizes='32x32' href='/public/logo.svg' />
            <link rel='apple-touch-icon' sizes='180x180' href='/public/logo.svg' />
            <link rel='manifest' href='/manifest.json' />
            <link rel='mask-icon' color='#000000' href='/public/logo.svg' />
            <link rel='apple-touch-startup-image' href='/public/logo.svg' />

            {/* 移动端HTML页面的元标签 */}
            {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
            <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
            <meta name='theme-color' content='#000' />
            <link rel='shortcut icon' href='/public/logo.svg' />

            {/* documentation: https://dev.twitter.com/cards/getting-started*/}
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:site' content={twitter} />
        </>
    )
}