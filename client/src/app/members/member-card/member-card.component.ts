import { ToastrService } from 'ngx-toastr';
import { MembersService } from 'src/app/_services/members.service';
import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member;

  constructor(private membersService: MembersService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addLike(member: Member) {
    this.membersService.addLike(member.username).subscribe(() => {
      this.toastr.success('You have liked ' + member.knownAs);
    });
  }

}
