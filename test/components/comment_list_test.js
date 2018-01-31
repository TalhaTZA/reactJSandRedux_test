import { renderComponent , expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Comment List',()=>{
    let component;

    beforeEach(()=>{
        const props={comments:['first test comment','second test comment']}
        component=renderComponent(CommentList,null,props);
    })

    it('shows an li for each comment',()=>{
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided',()=>{
        expect(component).to.contain('first test comment');
        expect(component).to.contain('second test comment');
    });

});