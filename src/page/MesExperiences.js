import '../style/portfolioCSS.css';
import Header from "../elementPage/Header";
import Footer from "../elementPage/Footer";

function MesExperiences({text, setText}) {

    return (<>
        <Header text={text} setText={setText}/>
        <div className='body'>
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed vulputate turpis. Aliquam sit amet
                neque ac diam eleifend porttitor. Aenean pulvinar varius dignissim. Nunc eget vulputate odio, a laoreet
                nisl. Duis pulvinar sodales tempor. Sed ac lacus lorem. Aliquam congue porttitor velit, quis venenatis
                neque. Donec porttitor et risus rutrum bibendum. In porttitor arcu vitae quam molestie gravida. Aliquam
                sollicitudin est efficitur felis laoreet consectetur. Nunc nec mauris metus. Curabitur nulla risus,
                pulvinar vel malesuada in, sollicitudin sed dolor. Proin at elementum risus, et rhoncus dui.

                Vivamus tincidunt mi id fermentum pharetra. Vivamus vulputate dapibus velit, vitae cursus massa vehicula
                ut. Vivamus elementum est vitae erat sollicitudin faucibus. Integer fermentum lectus egestas magna
                ullamcorper, id pellentesque nibh accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nibh tortor, aliquet ut lacus et, bibendum vehicula sapien. Mauris auctor interdum eleifend.
                Nunc cursus pharetra eros, a tempus magna imperdiet quis. Nulla cursus facilisis nunc sit amet finibus.
                Ut ultrices risus et diam pulvinar rutrum. Nulla sed placerat lectus. Nam eget dolor iaculis, egestas
                ante sed, sodales sem. Sed et lectus sagittis, vulputate arcu et, consequat nulla. Etiam sem ligula,
                varius eu lorem nec, sodales porta est. Nunc ultrices, augue non venenatis imperdiet, neque massa
                aliquet nisl, eu suscipit diam libero id urna. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.

                Maecenas purus ligula, scelerisque in tempus a, viverra consequat quam. Pellentesque ultricies turpis
                eget dictum condimentum. Integer semper ligula arcu, quis semper quam facilisis sed. Nunc sit amet
                blandit purus, in scelerisque augue. Fusce laoreet non mauris nec tempor. Integer pretium eu velit sit
                amet laoreet. Praesent malesuada vel tortor ac sollicitudin. Praesent nibh ipsum, rhoncus quis neque
                quis, molestie bibendum risus. Integer placerat neque sed magna dignissim volutpat. Pellentesque diam
                purus, convallis auctor est euismod, tincidunt feugiat enim. Sed massa dolor, ullamcorper ac auctor in,
                venenatis molestie ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Ut cursus laoreet bibendum. In porttitor venenatis quam quis molestie. Cras massa eros, luctus in
                vulputate eu, laoreet quis tortor. Donec ut mauris lectus.

                Sed arcu orci, eleifend et scelerisque nec, tempus sed ex. Sed porttitor luctus maximus. Phasellus ac mi
                at metus pharetra ornare nec in massa. Sed suscipit placerat luctus. Nam sit amet euismod eros.
                Pellentesque in odio ac massa sagittis tempor ut et leo. Nam placerat lacus nisl, a condimentum enim
                tincidunt vel. Duis viverra ut mi eget dignissim. Mauris tempor cursus vehicula. Curabitur tristique
                molestie tellus in fringilla.

                Sed cursus massa sed dolor feugiat, nec pellentesque metus convallis. Curabitur vitae enim eu mauris
                volutpat egestas. Nunc tincidunt ultrices odio quis laoreet. Vivamus fermentum leo et urna placerat
                auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ipsum varius purus
                suscipit sodales. Vivamus quis pretium sem. Sed pretium pharetra urna, id maximus justo vestibulum nec.
                Suspendisse magna elit, hendrerit ac augue ut, euismod aliquet ex. Nam sed eleifend metus, in vehicula
                urna. Nullam enim velit, interdum eget erat vitae, pretium efficitur purus.</p>

            <br/>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed vulputate turpis. Aliquam sit amet
                neque ac diam eleifend porttitor. Aenean pulvinar varius dignissim. Nunc eget vulputate odio, a laoreet
                nisl. Duis pulvinar sodales tempor. Sed ac lacus lorem. Aliquam congue porttitor velit, quis venenatis
                neque. Donec porttitor et risus rutrum bibendum. In porttitor arcu vitae quam molestie gravida. Aliquam
                sollicitudin est efficitur felis laoreet consectetur. Nunc nec mauris metus. Curabitur nulla risus,
                pulvinar vel malesuada in, sollicitudin sed dolor. Proin at elementum risus, et rhoncus dui.

                Vivamus tincidunt mi id fermentum pharetra. Vivamus vulputate dapibus velit, vitae cursus massa vehicula
                ut. Vivamus elementum est vitae erat sollicitudin faucibus. Integer fermentum lectus egestas magna
                ullamcorper, id pellentesque nibh accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nibh tortor, aliquet ut lacus et, bibendum vehicula sapien. Mauris auctor interdum eleifend.
                Nunc cursus pharetra eros, a tempus magna imperdiet quis. Nulla cursus facilisis nunc sit amet finibus.
                Ut ultrices risus et diam pulvinar rutrum. Nulla sed placerat lectus. Nam eget dolor iaculis, egestas
                ante sed, sodales sem. Sed et lectus sagittis, vulputate arcu et, consequat nulla. Etiam sem ligula,
                varius eu lorem nec, sodales porta est. Nunc ultrices, augue non venenatis imperdiet, neque massa
                aliquet nisl, eu suscipit diam libero id urna. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.

                Maecenas purus ligula, scelerisque in tempus a, viverra consequat quam. Pellentesque ultricies turpis
                eget dictum condimentum. Integer semper ligula arcu, quis semper quam facilisis sed. Nunc sit amet
                blandit purus, in scelerisque augue. Fusce laoreet non mauris nec tempor. Integer pretium eu velit sit
                amet laoreet. Praesent malesuada vel tortor ac sollicitudin. Praesent nibh ipsum, rhoncus quis neque
                quis, molestie bibendum risus. Integer placerat neque sed magna dignissim volutpat. Pellentesque diam
                purus, convallis auctor est euismod, tincidunt feugiat enim. Sed massa dolor, ullamcorper ac auctor in,
                venenatis molestie ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Ut cursus laoreet bibendum. In porttitor venenatis quam quis molestie. Cras massa eros, luctus in
                vulputate eu, laoreet quis tortor. Donec ut mauris lectus.

                Sed arcu orci, eleifend et scelerisque nec, tempus sed ex. Sed porttitor luctus maximus. Phasellus ac mi
                at metus pharetra ornare nec in massa. Sed suscipit placerat luctus. Nam sit amet euismod eros.
                Pellentesque in odio ac massa sagittis tempor ut et leo. Nam placerat lacus nisl, a condimentum enim
                tincidunt vel. Duis viverra ut mi eget dignissim. Mauris tempor cursus vehicula. Curabitur tristique
                molestie tellus in fringilla.

                Sed cursus massa sed dolor feugiat, nec pellentesque metus convallis. Curabitur vitae enim eu mauris
                volutpat egestas. Nunc tincidunt ultrices odio quis laoreet. Vivamus fermentum leo et urna placerat
                auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ipsum varius purus
                suscipit sodales. Vivamus quis pretium sem. Sed pretium pharetra urna, id maximus justo vestibulum nec.
                Suspendisse magna elit, hendrerit ac augue ut, euismod aliquet ex. Nam sed eleifend metus, in vehicula
                urna. Nullam enim velit, interdum eget erat vitae, pretium efficitur purus.</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed vulputate turpis. Aliquam sit amet
                neque ac diam eleifend porttitor. Aenean pulvinar varius dignissim. Nunc eget vulputate odio, a laoreet
                nisl. Duis pulvinar sodales tempor. Sed ac lacus lorem. Aliquam congue porttitor velit, quis venenatis
                neque. Donec porttitor et risus rutrum bibendum. In porttitor arcu vitae quam molestie gravida. Aliquam
                sollicitudin est efficitur felis laoreet consectetur. Nunc nec mauris metus. Curabitur nulla risus,
                pulvinar vel malesuada in, sollicitudin sed dolor. Proin at elementum risus, et rhoncus dui.

                Vivamus tincidunt mi id fermentum pharetra. Vivamus vulputate dapibus velit, vitae cursus massa vehicula
                ut. Vivamus elementum est vitae erat sollicitudin faucibus. Integer fermentum lectus egestas magna
                ullamcorper, id pellentesque nibh accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nibh tortor, aliquet ut lacus et, bibendum vehicula sapien. Mauris auctor interdum eleifend.
                Nunc cursus pharetra eros, a tempus magna imperdiet quis. Nulla cursus facilisis nunc sit amet finibus.
                Ut ultrices risus et diam pulvinar rutrum. Nulla sed placerat lectus. Nam eget dolor iaculis, egestas
                ante sed, sodales sem. Sed et lectus sagittis, vulputate arcu et, consequat nulla. Etiam sem ligula,
                varius eu lorem nec, sodales porta est. Nunc ultrices, augue non venenatis imperdiet, neque massa
                aliquet nisl, eu suscipit diam libero id urna. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.

                Maecenas purus ligula, scelerisque in tempus a, viverra consequat quam. Pellentesque ultricies turpis
                eget dictum condimentum. Integer semper ligula arcu, quis semper quam facilisis sed. Nunc sit amet
                blandit purus, in scelerisque augue. Fusce laoreet non mauris nec tempor. Integer pretium eu velit sit
                amet laoreet. Praesent malesuada vel tortor ac sollicitudin. Praesent nibh ipsum, rhoncus quis neque
                quis, molestie bibendum risus. Integer placerat neque sed magna dignissim volutpat. Pellentesque diam
                purus, convallis auctor est euismod, tincidunt feugiat enim. Sed massa dolor, ullamcorper ac auctor in,
                venenatis molestie ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Ut cursus laoreet bibendum. In porttitor venenatis quam quis molestie. Cras massa eros, luctus in
                vulputate eu, laoreet quis tortor. Donec ut mauris lectus.

                Sed arcu orci, eleifend et scelerisque nec, tempus sed ex. Sed porttitor luctus maximus. Phasellus ac mi
                at metus pharetra ornare nec in massa. Sed suscipit placerat luctus. Nam sit amet euismod eros.
                Pellentesque in odio ac massa sagittis tempor ut et leo. Nam placerat lacus nisl, a condimentum enim
                tincidunt vel. Duis viverra ut mi eget dignissim. Mauris tempor cursus vehicula. Curabitur tristique
                molestie tellus in fringilla.

                Sed cursus massa sed dolor feugiat, nec pellentesque metus convallis. Curabitur vitae enim eu mauris
                volutpat egestas. Nunc tincidunt ultrices odio quis laoreet. Vivamus fermentum leo et urna placerat
                auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus ipsum varius purus
                suscipit sodales. Vivamus quis pretium sem. Sed pretium pharetra urna, id maximus justo vestibulum nec.
                Suspendisse magna elit, hendrerit ac augue ut, euismod aliquet ex. Nam sed eleifend metus, in vehicula
                urna. Nullam enim velit, interdum eget erat vitae, pretium efficitur purus.</p>
        </div>
        <Footer/>

    </>);
}

export default MesExperiences;
