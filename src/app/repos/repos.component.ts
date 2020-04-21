import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReposService } from '../service/repos.service';
import { Repo } from './repos.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  user: string
  repoList: Repo[]
  closeResult: string
  selectRepo: Object
  favoriteRepo = false
  candidate: Object
  

  constructor(private route: ActivatedRoute,
    private reposService: ReposService,
    private modalService: NgbModal) {
    this.user = route.snapshot.params['login']
  }

  ngOnInit() {
    this.reposService.getUserRepo(this.user).subscribe(
      (res: Repo[]) => {
        this.repoList = res
      },
      error => { },
      () => { }
    )
  }

  open(content, repo) {

    if (localStorage.getItem(repo)) {
      this.favoriteRepo = true
    } else {
      this.favoriteRepo = false
    }

     this.selectRepo = this.repoList.find(
      function findRepo(allrepo) {
        return allrepo.name === repo;
      }
    )
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addFavorites(){
    if (!localStorage.getItem(this.selectRepo.name.toString())) {
      localStorage.setItem(this.selectRepo.name.toString(), JSON.stringify(this.selectRepo)) 
    } else {
      delete localStorage[this.selectRepo.name.toString()]
    } 
  }
}
 